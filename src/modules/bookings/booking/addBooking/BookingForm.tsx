import React from "react";
import {bookingFields} from "../../../../librairy/forms/listFormConfig";
import DynamicForm from "../../../../main/dynamicForm/DynamicForm";
import {useGetClients} from "../../../../librairy/hooks/clients.hook";
import {useGetRooms} from "../../../../librairy/hooks/rooms.hook";
import Spinner from "../../../../main/spinner/Spinner";
import {SelectOptionType} from "../../../../models/generics/field";
import {Client} from "../../../../models/client";

const BookingForm: React.FC<{ submit: any }> = ({submit}) => {
    const clients = useGetClients();
    const rooms = useGetRooms();
    if (!clients || !rooms) {
        return <Spinner/>;
    }
    const fields = bookingFields.slice();
    fields.map(field => {
        if (field.name === 'roomId') {
            field.options = rooms.map(room => room.number && room.id ? ({
                name: room.number + (' (Apart:' + room.apartment?.name + ')'),
                value: room.id
            }) : null).filter(a => a) as SelectOptionType[];
        } else if (field.name === 'clientId') {
            field.options = clients.map(client => {
                client = Object.assign(new Client(), client);
                return client.firstName && client.lastName && client.id ? ({
                    name: client.fullName,
                    value: client.id
                }) : null
            }).filter(a => a) as SelectOptionType[];
        }
        return field;
    })
    return <DynamicForm fields={bookingFields} submit={submit}/>;
}

export default BookingForm;

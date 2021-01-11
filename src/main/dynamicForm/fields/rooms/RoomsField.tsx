import React, {useState} from "react";
import FieldStructureContainer from "../FieldStructureContainer";
import {Field} from "../../../../models/generics/field";
import Button from "../../../button/Button";
import DynamicForm from "../../DynamicForm";
import {Room} from "../../../../models/room";
import {defaultRoomFieldsValues, roomFields} from "../../../../librairy/forms/listFormConfig";

const RoomsField: React.FC<{ fieldConfig: Field, change: any, value: any }> = ({fieldConfig, change, value}) => {
    const [rooms, setRooms] = useState<Room[]>(value);
    const roomForm: Field[] = roomFields;
    const changed = (values: any, index: any) => {
        const patch = rooms.slice();
        patch[index] = values;
        change(fieldConfig.name, patch);
        setRooms(patch);
    }
    return (
        <FieldStructureContainer label={fieldConfig.label}>
            {
                rooms.map((room, index) => (
                    <div key={index}>
                        <p>Room {index + 1}</p>
                        <DynamicForm fields={roomForm} changed={(values: any) => {
                            changed(values, index);
                        }}/>
                    </div>
                ))
            }
            <Button label={'Add another room'} callback={() => {
                const patch = rooms.slice();
                patch.push(defaultRoomFieldsValues);
                setRooms(patch);
            }}/>
        </FieldStructureContainer>
    );
}

export default RoomsField;

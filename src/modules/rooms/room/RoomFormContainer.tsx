import React from "react";
import RoomForm from "./RoomForm";
import checkErrors from "../../../librairy/forms/utils";
import apiService from "../../../services/api.service";
import {useNavigate} from "@reach/router";

const RoomFormContainer: React.FC<{ apartmentId: string }> = ({apartmentId}) => {
    // eslint-disable-next-line
    const navigate = useNavigate();
    const submit = (values: any) => {
        const errors = checkErrors(values);
        if (errors) {
            alert('Error: Field(s) can\'t be empty (' + errors.join(',') + ')');
            return;
        }
        values.apartmentId = apartmentId;
        apiService.addRoom(values).then(room => {
            navigate('/apartments/' + apartmentId);
        });
    };
    return <RoomForm submit={submit}/>;
}

export default RoomFormContainer;

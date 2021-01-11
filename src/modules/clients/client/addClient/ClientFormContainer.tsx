import React from "react";
import {useNavigate} from "@reach/router";
import checkErrors from "../../../../librairy/forms/utils";
import ClientForm from "./ClientForm";
import apiService from "../../../../services/api.service";

const ClientFormContainer: React.FC<any> = () => {
    const navigate = useNavigate();
    const submit = (values: any) => {
        const errors = checkErrors(values);
        if (errors) {
            alert('Error: Field(s) can\'t be empty (' + errors.join(',') + ')');
            return;
        }
        apiService.addClient(values).then(client => {
            navigate('/clients');
        });
    };
    return <ClientForm submit={submit}/>;
}

export default ClientFormContainer;

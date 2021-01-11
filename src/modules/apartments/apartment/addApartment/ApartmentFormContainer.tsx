import React from "react";
import ApartmentForm from "./ApartmentForm";
import apiService from "../../../../services/api.service";
import {useNavigate} from "@reach/router";
import checkErrors from "../../../../librairy/forms/utils";

const ApartmentFormContainer: React.FC<any> = () => {
    const navigate = useNavigate();
    const submit = (values: any) => {
        const errors = checkErrors(values);
        if (errors) {
            alert('Error: Field(s) can\'t be empty (' + errors.join(',') + ')');
            return;
        }
        apiService.addApartment(values).then(apartment => {
            navigate('/apartments');
        });
    };
    return <ApartmentForm submit={submit}/>;
}

export default ApartmentFormContainer;

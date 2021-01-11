import DynamicForm from "../../../../main/dynamicForm/DynamicForm";
import {apartmentFields} from "../../../../librairy/forms/listFormConfig";
import React from "react";

const ApartmentForm: React.FC<{ submit: any }> = ({submit}) => {
    return <DynamicForm fields={apartmentFields} submit={submit}/>;
}

export default ApartmentForm;

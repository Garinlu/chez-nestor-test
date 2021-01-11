import React from "react";
import DynamicForm from "../../../../main/dynamicForm/DynamicForm";
import {clientFields} from "../../../../librairy/forms/listFormConfig";

const ClientForm: React.FC<{ submit: any }> = ({submit}) => {
    return <DynamicForm fields={clientFields} submit={submit}/>;
}

export default ClientForm;

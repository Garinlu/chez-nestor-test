import React from "react";
import {roomFieldsForm} from "../../../librairy/forms/listFormConfig";
import DynamicForm from "../../../main/dynamicForm/DynamicForm";

const RoomForm: React.FC<{ submit: any }> = ({submit}) => {
    return <DynamicForm fields={roomFieldsForm} submit={submit}/>;
}

export default RoomForm;

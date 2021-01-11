import React from "react";
import ButtonField from "./button/ButtonField";
import InputField from "./input/InputField";
import {Field} from "../../../models/generics/field";
import RoomsField from "./rooms/RoomsField";
import SelectField from "./select/SelectField";

type DynamicFieldProps = { values: any, fieldConfig: Field, handleChange: any };
const DynamicField: React.FC<DynamicFieldProps> = ({values, fieldConfig, handleChange}) => {
    switch (fieldConfig.type) {
        case "select":
            return <SelectField fieldConfig={fieldConfig} change={handleChange} value={values[fieldConfig.name]}/>;
        case "rooms":
            return <RoomsField fieldConfig={fieldConfig} change={handleChange}
                               value={values[fieldConfig.name]}/>
        case "button":
        case "submit":
            return (
                <ButtonField fieldConfig={fieldConfig} click={handleChange}/>
            )
        case "text":
        case "number":
        case "email":
        case "date":
            return (
                <InputField fieldConfig={fieldConfig} change={handleChange}
                            value={values[fieldConfig.name]}/>
            );
    }
    return <div>Field type not found</div>;
}

export default DynamicField;

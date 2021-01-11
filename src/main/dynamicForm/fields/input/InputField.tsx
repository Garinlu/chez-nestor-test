import React from "react";
import FieldStructureContainer from "../FieldStructureContainer";
import {Field} from "../../../../models/generics/field";
import { Input } from "../../../../librairy/styled/theme";

const InputField: React.FC<{ fieldConfig: Field, change: any, value: any }> = ({fieldConfig, change, value}) => {
    return (
        <FieldStructureContainer label={fieldConfig.label}>
            <Input type={fieldConfig.type} name={fieldConfig.name} id={fieldConfig.name} placeholder={fieldConfig.label}
                   value={value}
                   onChange={(e) => change(fieldConfig.name, e.target.value)}/>
        </FieldStructureContainer>
    );
}

export default InputField;

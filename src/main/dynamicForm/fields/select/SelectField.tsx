import React from "react";
import FieldStructureContainer from "../FieldStructureContainer";
import {Field} from "../../../../models/generics/field";
import Select from "../../../select/Select";

const SelectField: React.FC<{ fieldConfig: Field, change: any, value: any }> = ({fieldConfig, change, value}) => {
    return (
        <FieldStructureContainer label={fieldConfig.label}>
            <Select values={fieldConfig.options || []} onChanged={(val) => change(fieldConfig.name, val)}
                    value={value}/>
        </FieldStructureContainer>
    );
}

export default SelectField;

import React from "react";
import {FieldStructure, FieldStructureLabel} from "../../../librairy/styled/theme";

const FieldStructureContainer: React.FC<{ label: string }> = (props) => {
    return (
        <FieldStructure>
            <FieldStructureLabel>
                {props.label}
            </FieldStructureLabel>
            {props.children}
        </FieldStructure>
    )
}

export default FieldStructureContainer;

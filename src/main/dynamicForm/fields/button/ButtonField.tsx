import React from "react";
import FieldStructureContainer from "../FieldStructureContainer";
import Button from "../../../button/Button";
import {ButtonType, Field} from "../../../../models/generics/field";

const ButtonField: React.FC<{ fieldConfig: Field, click: (name: string, value: any, e: any) => void }> = ({
                                                                                                              fieldConfig,
                                                                                                              click
                                                                                                          }) => {
    return (
        <FieldStructureContainer label={''}>
            <div>
                <Button type={fieldConfig.type as ButtonType} label={fieldConfig.label} callback={(e: any) => {
                    click(fieldConfig.name, null, e)
                }}/>
            </div>
        </FieldStructureContainer>
    );
}

export default ButtonField;

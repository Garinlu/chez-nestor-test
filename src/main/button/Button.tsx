import React from "react";
import {ButtonType} from "../../models/generics/field";
import {ButtonDefault} from "../../librairy/styled/theme";

const Button: React.FC<{ type?: ButtonType, label: string, callback: (e: any) => void }> = ({
                                                                                                type,
                                                                                                label,
                                                                                                callback
                                                                                            }) => {
    return (
        <ButtonDefault className="btn btn-form" onClick={(e) => callback(e)}
                       type={type || 'button'}>{label}</ButtonDefault>
    );
}

export default Button;

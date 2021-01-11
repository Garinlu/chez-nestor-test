import React, {useState} from "react";
import DynamicField from "./fields/DynamicField";
import {Field} from "../../models/generics/field";

const notTriggerTypes: string[] = ['button', 'submit'];

const DynamicForm: React.FC<{ fields: Field[], submit?: (values: any) => void, changed?: (values: any) => void }> =
    ({fields, submit, changed}) => {
        const mapFields: any = {};
        fields.forEach(field => mapFields[field.name] = field);
        const [values, setValues] = useState(() => {
            const defaultValues: any = {};
            fields.filter(field => !notTriggerTypes.includes(field.type))
                .forEach(field => {
                    defaultValues[field.name] = field.value;
                });
            return defaultValues;
        });
        const handleChange = (name: string, newValue: any, e?: any) => {
            if (mapFields[name].type === 'submit') {
                e.preventDefault();
                if (submit) {
                    submit(values);
                }
            } else {
                const patch: any = {};
                patch[name] = newValue;
                const valuesAfter = Object.assign({}, values, patch);
                if (changed) {
                    changed(valuesAfter);
                }
                setValues(valuesAfter);

            }
        }
        return (
            <div>
                {
                    fields.map((field, index) => (
                        <DynamicField values={values} fieldConfig={field} handleChange={handleChange} key={index}/>
                    ))
                }
            </div>
        );
    }

export default DynamicForm;


import React from "react";

type SelectProps = { values: { name: string, value: any }[], onChanged: (value: any) => void, value?: any };

const Select: React.FC<SelectProps> = ({values, onChanged, value}) => {
    return (
        <select value={value} onChange={(e) => {
            onChanged(e.target.value);
        }}>
            {
                values.map(val => (
                    <option key={val.value} value={val.value}>{val.name}</option>
                ))
            }
        </select>
    );
}

export default Select;

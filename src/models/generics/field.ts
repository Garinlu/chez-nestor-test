export interface Field {
    type: ButtonType | InputType | 'rooms' | 'select';
    name: string;
    label: string;
    value?: any;
    options?: SelectOptionType[];
}

export type SelectOptionType = { name: string, value: any };


export type ButtonType = 'submit' | 'button';

export type InputType = 'text' | 'number' | 'email' | 'date';

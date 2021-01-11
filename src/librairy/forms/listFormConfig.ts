import {Field} from "../../models/generics/field";

export const defaultRoomFieldsValues = {number: '', area: '', price: ''};

export const apartmentFields: Field[] = [
    {
        type: 'text',
        name: 'name',
        label: 'Name',
        value: ''
    },
    {
        type: 'text',
        name: 'number',
        label: 'Number',
        value: ''
    },
    {
        type: 'rooms',
        name: 'rooms',
        label: 'Room(s)',
        value: [defaultRoomFieldsValues]
    },
    {
        type: 'submit',
        name: 'submit',
        label: 'Submit',
    }
];

export const roomFields: Field[] = [
    {
        type: 'text',
        name: 'number',
        label: 'Number',
        value: ''
    },
    {
        type: 'text',
        name: 'area',
        label: 'Area',
        value: ''
    },
    {
        type: 'text',
        name: 'price',
        label: 'Price',
        value: ''
    }
];

export const roomFieldsForm: Field[] = roomFields.concat([{
    type: 'submit',
    name: 'submit',
    label: 'Save'
}]);

export const clientFields: Field[] = [
    {
        type: 'text',
        name: 'firstName',
        label: 'First Name',
        value: ''
    },
    {
        type: 'text',
        name: 'lastName',
        label: 'Last Name',
        value: ''
    },
    {
        type: 'text',
        name: 'email',
        label: 'Email',
        value: ''
    },
    {
        type: 'text',
        name: 'phone',
        label: 'Phone',
        value: ''
    },
    {
        type: 'text',
        name: 'nationality',
        label: 'Nationality',
        value: ''
    },
    {
        type: 'date',
        name: 'birthDate',
        label: 'Birth Date',
        value: ''
    },
    {
        type: 'submit',
        name: 'submit',
        label: 'Save'
    }
];

export const bookingFields: Field[] = [
    {
        type: 'select',
        name: 'clientId',
        label: 'Client',
        value: ''
    },
    {
        type: 'select',
        name: 'roomId',
        label: 'Room',
        value: ''
    },
    {
        type: 'submit',
        name: 'submit',
        label: 'Save'
    }
];

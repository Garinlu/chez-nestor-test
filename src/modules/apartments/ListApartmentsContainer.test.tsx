import apiService from "../../services/api.service";
import ListApartmentsContainer from "./ListApartmentsContainer";
import {Apartment} from "../../models/apartment";
import {render, screen} from '@testing-library/react';
import {ThemeContext} from "styled-components";
import React from "react";


function beforeLoading(mocked: Apartment[]) {
    jest.mock('../../services/api.service');
    apiService.getApartments = async () => {
        return mocked;
    };
    render(
        <ThemeContext.Provider value={'light'}>
            <ListApartmentsContainer/>
        </ThemeContext.Provider>
    );
}

describe('<ListApartmentsContainer/>', () => {
    test('Displaing 1 apartment', async () => {
        const apartmentMocked = {name: 'name_apartment', id: 'id_apartment', number: 'number', rooms: []};
        beforeLoading([apartmentMocked]);
        await screen.findByText(/name_apartment/).then((apartmentName) => {
            expect(apartmentName).toBeInTheDocument();
        });
    });
});


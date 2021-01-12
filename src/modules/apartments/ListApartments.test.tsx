import {render, screen} from '@testing-library/react';
import ListApartments from "./ListApartments";
import {ThemeContext} from "styled-components";
import React from "react";


describe('<ListApartments/>', () => {
    test("Apartment card content", async () => {
        const apartmentMocked = {name: 'name_apartment', id: 'id_apartment', number: 'number', rooms: []};
        render(
            <ThemeContext.Provider value={'light'}>
                <ListApartments apartments={[apartmentMocked]}/>
            </ThemeContext.Provider>
        );
        await screen.findByText(/name_apartment/).then((apartmentName) => {
            expect(apartmentName).toBeInTheDocument();
        });
    });
});

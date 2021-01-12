import {render, screen} from '@testing-library/react';
import React from 'react';
import Home from "./Home";
import {ThemeContext} from "styled-components";


describe('<Home/>', () => {
    test("Apartment card content", async () => {
        render(
            <ThemeContext.Provider value={'light'}>
                <Home/>
            </ThemeContext.Provider>
        );
        await screen.findByText(/Welcome on my Chez Nestor test app. Created by Lucas Garin/)
            .then((homeText) => {
                expect(homeText).toBeInTheDocument();
            });
    });
});

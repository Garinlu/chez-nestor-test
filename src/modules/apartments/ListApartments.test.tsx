import {render, screen} from '@testing-library/react';
import ListApartments from "./ListApartments";


describe('<ListApartments/>', () => {
    test("Apartment card content", async () => {
        const apartmentMocked = {name: 'name_apartment', id: 'id_apartment', number: 'number', rooms: []};
        render(<ListApartments apartments={[apartmentMocked]}/>);
        await screen.findByText(/name_apartment/).then((apartmentName) => {
            expect(apartmentName).toBeInTheDocument();
        });
    });
});

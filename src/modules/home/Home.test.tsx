import {render, screen} from '@testing-library/react';
import Home from "./Home";


describe('<Home/>', () => {
    test("Apartment card content", async () => {
        render(<Home/>);
        await screen.findByText(/Welcome on my Chez Nestor test app. Created by Lucas Garin/)
            .then((homeText) => {
                expect(homeText).toBeInTheDocument();
            });
    });
});

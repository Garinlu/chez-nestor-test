import React from "react";
import { H1 } from "../../../../librairy/styled/theme";
import BookingFormContainer from "./BookingFormContainer";

const AddBooking: React.FC<any> = () => {
    return (
        <React.Fragment>
            <H1>Add a booking</H1>
            <BookingFormContainer/>
        </React.Fragment>
    );
}

export default AddBooking;

import React from "react";
import BookingFormContainer from "./BookingFormContainer";

const AddBooking: React.FC<any> = () => {
    return (
        <React.Fragment>
            <h1>Add a booking</h1>
            <BookingFormContainer/>
        </React.Fragment>
    );
}

export default AddBooking;

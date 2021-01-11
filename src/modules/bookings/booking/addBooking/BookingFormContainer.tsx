import React from "react";
import {useNavigate} from "@reach/router";
import checkErrors from "../../../../librairy/forms/utils";
import BookingForm from "./BookingForm";
import apiService from "../../../../services/api.service";

const BookingFormContainer: React.FC<any> = () => {
    // eslint-disable-next-line
    const navigate = useNavigate();
    const submit = (values: any) => {
        const errors = checkErrors(values);
        if (errors) {
            alert('Error: Field(s) can\'t be empty (' + errors.join(',') + ')');
            return;
        }
        apiService.addBooking(values).then(booking => {
            navigate('/bookings');
        }, errors => {
            alert(errors.response.data.error);
        });
    };
    return <BookingForm submit={submit}/>;
}

export default BookingFormContainer;

import React, {useEffect, useState} from "react";
import {Booking} from "../../../models/booking";
import apiService from "../../../services/api.service";
import Spinner from "../../../main/spinner/Spinner";
import BookingDetails from "./BookingDetails";

const BookingDetailsContainer: React.FC<{ bookingId: string }> = ({bookingId}) => {
    const booking = useGetBooking(bookingId);
    if (!booking) {
        return <Spinner/>;
    }
    return <BookingDetails booking={booking}/>;
}

function useGetBooking(bookingId: string) {
    const [booking, setBooking] = useState<Booking>();
    useEffect(() => {
        apiService.getBooking(bookingId).then(res => {
            setBooking(Booking.assign(res));
        })
    }, [bookingId]);
    return booking;
}

export default BookingDetailsContainer;

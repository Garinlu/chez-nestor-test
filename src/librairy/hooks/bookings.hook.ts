import {useEffect, useState} from "react";
import {Booking} from "../../models/booking";
import apiService from "../../services/api.service";

export function useGetBookings() {
    const [bookings, setBookings] = useState<Booking[]>();
    useEffect(() => {
        apiService.getBookings().then(res => {
            setBookings(res.map(book => {
                return Booking.assign(book)
            }));
        });
    }, []);
    return bookings;
}

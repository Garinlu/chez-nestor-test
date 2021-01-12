import React from "react";
import { H1 } from "../../../librairy/styled/theme";
import {Booking} from "../../../models/booking";

const BookingDetails: React.FC<{ booking: Booking }> = ({booking}) => {
    return (
        <div>
            <H1>Booking #{booking.id}</H1>
            <ul>
                <li><b>Creation:</b> {booking.formattedCreatedAt}</li>
                <li><b>Client:</b> {booking.client?.fullName}</li>
                <li><b>Room:</b> {booking.room?.number}</li>
            </ul>
        </div>
    );
}

export default BookingDetails;

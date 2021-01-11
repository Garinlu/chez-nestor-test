import React from "react";
import {RouteComponentProps, useParams} from "@reach/router";
import BookingDetailsContainer from "./BookingDetailsContainer";

const Booking: React.FC<RouteComponentProps> = () => {
    const params = useParams();
    return <BookingDetailsContainer bookingId={params.id}/>;
}

export default Booking;

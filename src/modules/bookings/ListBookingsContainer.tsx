import React from "react";
import Spinner from "../../main/spinner/Spinner";
import ListBookings from "./ListBookings";
import {useGetBookings} from "../../librairy/hooks/bookings.hook";

const ListBookingsContainer: React.FC<any> = () => {
    const bookings = useGetBookings();
    if (!bookings) {
        return <Spinner/>;
    }
    return (<ListBookings bookings={bookings}/>);
}

export default ListBookingsContainer;

import React from "react";
import {Router} from "@reach/router";
import Apartments from "../../modules/apartments/Apartments";
import Rooms from "../../modules/rooms/Rooms";
import Clients from "../../modules/clients/Clients";
import Home from "../../modules/home/Home";
import Apartment from "../../modules/apartments/apartment/Apartment";
import Client from "../../modules/clients/client/Client";
import AddApartment from "../../modules/apartments/apartment/addApartment/AddApartment";
import AddRoom from "../../modules/rooms/room/AddRoom";
import AddClient from "../../modules/clients/client/addClient/AddClient";
import Bookings from "../../modules/bookings/Bookings";
import Booking from "../../modules/bookings/booking/Booking";
import AddBooking from "../../modules/bookings/booking/addBooking/AddBooking";

const Routing: React.FC<any> = (props) => {
    return (
        <Router>
            <Home path="/"/>
            <Apartments path="/apartments"/>
            <Apartment path="/apartments/:id"/>
            <AddRoom path="/apartments/:id/room"/>
            <AddApartment path="/add/apartment"/>
            <Rooms path="/rooms"/>
            <Clients path="/clients"/>
            <Client path="/clients/:id"/>
            <AddClient path="/add/client"/>
            <Bookings path="/bookings"/>
            <Booking path="/bookings/:id"/>
            <AddBooking path="/add/booking"/>
        </Router>
    );
}

export default Routing;

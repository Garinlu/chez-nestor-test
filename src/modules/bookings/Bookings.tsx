import React from "react";
import {RouteComponentProps, useNavigate} from "@reach/router";
import ListBookingsContainer from "./ListBookingsContainer";
import Button from "../../main/button/Button";

const Bookings: React.FC<RouteComponentProps> = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Bookings</h1>
            <Button label={'Add booking'} callback={() => navigate('/add/booking')}/>
            <ListBookingsContainer/>
        </div>
    );
}
export default Bookings;

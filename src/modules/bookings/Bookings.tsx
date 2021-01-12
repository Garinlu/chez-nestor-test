import React from "react";
import {RouteComponentProps, useNavigate} from "@reach/router";
import ListBookingsContainer from "./ListBookingsContainer";
import Button from "../../main/button/Button";
import { H1 } from "../../librairy/styled/theme";

const Bookings: React.FC<RouteComponentProps> = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <H1>Bookings</H1>
            <Button label={'Add booking'} callback={() => navigate('/add/booking')}/>
            <ListBookingsContainer/>
        </div>
    );
}
export default Bookings;

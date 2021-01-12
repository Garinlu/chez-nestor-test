import React from "react";
import {RouteComponentProps} from "@reach/router";
import ListRoomsContainer from "./ListRoomsContainer";
import { H1 } from "../../librairy/styled/theme";

const Rooms: React.FC<RouteComponentProps> = () => {
    return (<div>
        <H1>Rooms</H1>
        <ListRoomsContainer/>
    </div>);
}

export default Rooms;

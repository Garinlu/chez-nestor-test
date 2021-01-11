import React from "react";
import {RouteComponentProps} from "@reach/router";
import ListRoomsContainer from "./ListRoomsContainer";

const Rooms: React.FC<RouteComponentProps> = () => {
    return (<div>
        <h1>Rooms</h1>
        <ListRoomsContainer/>
    </div>);
}

export default Rooms;

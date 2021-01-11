import React from "react";
import Spinner from "../../main/spinner/Spinner";
import ListRooms from "./ListRooms";
import {useGetRooms} from "../../librairy/hooks/rooms.hook";

const ListRoomsContainer: React.FC<any> = () => {
    const rooms = useGetRooms();
    if (!rooms) {
        return <Spinner/>;
    }
    return (
        <ListRooms rooms={rooms}/>
    );
}

export default ListRoomsContainer;

import React from "react";
import {ListCards} from "../../librairy/styled/theme";
import {Room} from "../../models/room";
import RoomCard from "../../main/roomCard/RoomCard";

const ListRooms: React.FC<{ rooms: Room[] }> = ({rooms}) => {
    return (
        <ListCards>
            {
                rooms.map(room => (
                    <RoomCard room={room} key={room.id}/>
                ))
            }
        </ListCards>
    );
}

export default ListRooms;

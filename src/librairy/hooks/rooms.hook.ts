import {useEffect, useState} from "react";
import {Room} from "../../models/room";
import apiService from "../../services/api.service";

export function useGetRooms() {
    const [rooms, setRooms] = useState<Room[]>();
    useEffect(() => {
        apiService.getRooms().then((res: Room[]) => {
            setRooms(res);
        })
    }, []);
    return rooms;
}

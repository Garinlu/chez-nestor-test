import {Client} from "./client";
import {Room} from "./room";

export class Booking {
    id?: string;
    clientId?: string;
    roomId?: string;
    client?: Client;
    room?: Room;
    createdAt?: string;

    get formattedCreatedAt() {
        return this.createdAt ? (new Date(this.createdAt)).toLocaleDateString() : 'Unknown';
    }

    static assign(res: any) {
        res.client = Object.assign(new Client(), res.client);
        res.room = Object.assign(new Room(), res.room);
        return Object.assign(new Booking(), res);
    }
}

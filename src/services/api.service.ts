import httpService from "./http.service";
import {Apartment} from "../models/apartment";
import {Room} from "../models/room";
import {Client} from "../models/client";
import {Booking} from "../models/booking";

class ApiService {

    getApartments(): Promise<Apartment[]> {
        return httpService.get('/api/apartment').then((res: { apartments: Apartment[] }) => res.apartments);
    }

    getApartment(id: string): Promise<Apartment | undefined> {
        return httpService.get('/api/apartment/' + id);
    }

    addApartment(apartment: Apartment) {
        return httpService.post('/api/apartment', apartment);
    }

    getRooms(): Promise<Room[]> {
        return httpService.get('/api/room').then((res: { rooms: Room[] }) => res.rooms);
    }

    getRoom(roomId: string): Promise<Room[]> {
        return httpService.get('/api/room').then((res: { rooms: Room[] }) => res.rooms);
    }

    addRoom(room: Room) {
        return httpService.post('/api/room', room);
    }

    getClients(): Promise<Client[]> {
        return httpService.get('/api/client').then((res: { clients: Client[] }) => res.clients);
    }

    getClient(id: string): Promise<Client | undefined> {
        return httpService.get('/api/client/' + id);
    }

    addClient(client: Client) {
        return httpService.post('/api/client', client);
    }

    getBookings() {
        return httpService.get('/api/booking').then((res: { bookings: Booking[] }) => res.bookings);
    }

    getBooking(bookingId: string) {
        return httpService.get('/api/booking/' + bookingId);
    }

    addBooking(booking: Booking) {
        return httpService.post('/api/booking', booking);
    }
}

const apiService = new ApiService();
export default apiService;

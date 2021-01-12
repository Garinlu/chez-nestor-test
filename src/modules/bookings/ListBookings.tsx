import React from "react";
import {Table, TBody, Td, Th, THead, Tr} from "../../librairy/styled/theme";
import {Booking} from "../../models/booking";
import {useNavigate} from "@reach/router";

const ListBookings: React.FC<{ bookings: Booking[] }> = ({bookings}) => {
    const navigate = useNavigate();
    const goBookingDetails = (bookingId?: string) => {
        if (bookingId) {
            navigate('/bookings/' + bookingId);
        }
    };
    return (
        <Table>
            <THead>
                <Tr>
                    <Th>Client</Th>
                    <Th>Room</Th>
                    <Th>Creation</Th>
                </Tr>
            </THead>
            <TBody>
            {
                bookings.map((booking, ind) => (
                    <Tr key={ind} onClick={(e) => goBookingDetails(booking.id)} style={{cursor: 'pointer'}}>
                        <Td>{booking.client?.fullName}</Td>
                        <Td>{booking.room?.number}</Td>
                        <Td>{booking.formattedCreatedAt}</Td>
                    </Tr>
                ))
            }
            </TBody>
        </Table>
    );
}

export default ListBookings;

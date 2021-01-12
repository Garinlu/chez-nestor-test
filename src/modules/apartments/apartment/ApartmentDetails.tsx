import React from "react";
import {H2, ListCards, P} from "../../../librairy/styled/theme";
import {Apartment} from "../../../models/apartment";
import RoomCard from "../../../main/roomCard/RoomCard";
import Button from "../../../main/button/Button";
import {useNavigate} from "@reach/router";

const ApartmentDetails: React.FC<{ apartment: Apartment }> = ({apartment}) => {
    const navigate = useNavigate();
    return (
        <div>
            <H2>Apartment {apartment.name}</H2>
            <P>Number: {apartment.number}</P>
            <P>{apartment.rooms?.length} room(s).</P>
            <Button label={'Add a room'} callback={() => {
                navigate('/apartments/' + apartment.id + '/room')
            }}/>
            <ListCards>
                {apartment.rooms?.map((room, index) => (
                    <RoomCard room={room} key={index} displayApartmentNumber={false}/>
                ))}
            </ListCards>
        </div>
    );
}
export default ApartmentDetails;

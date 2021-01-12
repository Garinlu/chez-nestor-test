import React from "react";
import {Room} from "../../models/room";
import CardContainer from "../cardContainer/CardContainer";
import roomImg from "../../librairy/img/room.svg";
import {CardBody, CardFooter, P, SmallText} from "../../librairy/styled/theme";

const RoomCard: React.FC<{ room: Room, displayApartmentNumber?: boolean }> = ({room, displayApartmentNumber = true}) => {
    return (
        <CardContainer>
            <CardBody>
                <img src={roomImg} alt={'room'}/>
            </CardBody>
            <CardFooter>
                <P>Room {room.number}</P>
                <SmallText><b>Space:</b> {room.area}m² / {room.price}€</SmallText>
                {
                    displayApartmentNumber ?
                        <SmallText><b>Apartment number:</b> {room.apartment?.number}</SmallText>
                        : <React.Fragment/>
                }
            </CardFooter>
        </CardContainer>
    );
};

export default RoomCard;

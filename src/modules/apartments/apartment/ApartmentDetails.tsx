import React from "react";
import {ListCards} from "../../../librairy/styled/theme";
import {Apartment} from "../../../models/apartment";
import RoomCard from "../../../main/roomCard/RoomCard";
import Button from "../../../main/button/Button";
import {useNavigate} from "@reach/router";

const ApartmentDetails: React.FC<{ apartment: Apartment }> = ({apartment}) => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Apartment {apartment.name}</h2>
            <p>Number: {apartment.number}</p>
            <p>{apartment.rooms?.length} room(s).</p>
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

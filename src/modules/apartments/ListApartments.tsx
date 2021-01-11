import {Link} from "@reach/router";
import React from "react";
import {CardBody, CardFooter, ListCards, SmallText} from "../../librairy/styled/theme";
import CardContainer from "../../main/cardContainer/CardContainer";
import {Apartment} from "../../models/apartment";
import apartmentImg from "../../librairy/img/apartment.svg";

const ListApartments: React.FC<{ apartments: Apartment[] }> = ({apartments}) => {
    return (
        <ListCards>
            {
                apartments.map(apartment => (
                    <CardContainer key={apartment.id}>
                        <Link to={'/apartments/' + apartment.id}>
                            <CardBody>
                                <img src={apartmentImg} alt={'room'}/>
                            </CardBody>
                            <CardFooter>
                                <p>Apartment {apartment.name}</p>
                                <SmallText><b>Rooms:</b> {apartment.rooms?.length}</SmallText>
                            </CardFooter>
                        </Link>
                    </CardContainer>
                ))
            }
        </ListCards>
    )
}
export default ListApartments;

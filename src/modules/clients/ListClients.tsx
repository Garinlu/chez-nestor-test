import React from "react";
import {Client} from "../../models/client";
import {CardBody, CardFooter, ListCards} from "../../librairy/styled/theme";
import CardContainer from "../../main/cardContainer/CardContainer";
import clientImg from "../../librairy/img/client.svg";
import {Link} from "@reach/router";

const ListClients: React.FC<{ clients: Client[] }> = ({clients}) => {
    return (
        <ListCards>
            {
                clients.map(client => (
                    <CardContainer key={client.id}>
                        <Link to={'/clients/' + client.id}>
                            <CardBody>
                                <img src={clientImg} alt={'client'}/>
                            </CardBody>
                            <CardFooter>
                                <p>{client.fullName}</p>
                            </CardFooter>
                        </Link>
                    </CardContainer>
                ))
            }
        </ListCards>);
}

export default ListClients;

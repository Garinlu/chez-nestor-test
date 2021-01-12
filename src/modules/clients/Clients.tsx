import React from "react";
import ListClientsContainer from "./ListClientsContainer";
import Button from "../../main/button/Button";
import {useNavigate} from "@reach/router";
import { H1 } from "../../librairy/styled/theme";

const Clients: React.FC<any> = () => {
    const navigate = useNavigate();
    return (
        <div>
            <H1>Clients</H1>
            <Button label={'Add client'} callback={() => {
                navigate('/add/client');
            }}/>
            <ListClientsContainer/>
        </div>
    );
}

export default Clients;

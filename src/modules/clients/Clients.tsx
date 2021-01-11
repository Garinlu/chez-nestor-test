import React from "react";
import ListClientsContainer from "./ListClientsContainer";
import Button from "../../main/button/Button";
import {useNavigate} from "@reach/router";

const Clients: React.FC<any> = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Clients</h1>
            <Button label={'Add client'} callback={() => {
                navigate('/add/client');
            }}/>
            <ListClientsContainer/>
        </div>
    );
}

export default Clients;

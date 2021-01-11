import React, {useEffect, useState} from "react";
import {Client} from "../../../models/client";
import apiService from "../../../services/api.service";
import Spinner from "../../../main/spinner/Spinner";
import ClientDetails from "./ClientDetails";

const ClientDetailsContainer: React.FC<{ id: string }> = ({id}) => {
    const {client, notFound} = useGetClient(id);
    if (notFound) {
        return <div>Client not found</div>;
    }
    if (!client) {
        return <Spinner/>;
    }
    return <ClientDetails client={client}/>;
}

function useGetClient(id: string) {
    const [client, setClient] = useState<Client>();
    const [notFound, setNotFound] = useState<boolean>(false);
    useEffect(() => {
        apiService.getClient(id).then(res => {
            if (!res) {
                setNotFound(true);
            } else {
                setClient(Object.assign(new Client(), res));
            }
        }, error => setNotFound(true));
    }, [id]);
    return {client, notFound};
}

export default ClientDetailsContainer;

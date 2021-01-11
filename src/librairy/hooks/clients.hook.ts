import {useEffect, useState} from "react";
import {Client} from "../../models/client";
import apiService from "../../services/api.service";


export function useGetClients() {
    const [clients, setClients] = useState<Client[]>();
    useEffect(() => {
        apiService.getClients().then((res) => {
            setClients(res.map(client => Object.assign(new Client(), client)));
        })
    }, []);
    return clients;
}

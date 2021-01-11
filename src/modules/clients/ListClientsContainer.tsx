import Spinner from "../../main/spinner/Spinner";
import ListClients from "./ListClients";
import {useGetClients} from "../../librairy/hooks/clients.hook";

const ListClientsContainer = () => {
    const clients = useGetClients();
    if (!clients) {
        return <Spinner/>;
    }
    return <ListClients clients={clients}/>;
};

export default ListClientsContainer;

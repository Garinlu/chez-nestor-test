import React from "react";
import ListApartments from "./ListApartments";
import Spinner from "../../main/spinner/Spinner";
import {useGetApartments} from "../../librairy/hooks/apartments.hook";

const ListApartmentsContainer: React.FC<any> = () => {
    const apartments = useGetApartments();
    if (!apartments) {
        return (
            <Spinner/>
        );
    }
    return (
        <ListApartments apartments={apartments}/>
    );
}

export default ListApartmentsContainer;

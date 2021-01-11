import React, {useEffect, useState} from "react";
import apiService from "../../../services/api.service";
import Spinner from "../../../main/spinner/Spinner";
import ApartmentDetails from "./ApartmentDetails";
import {Apartment} from "../../../models/apartment";

const ApartmentDetailsContainer: React.FC<{ id: string }> = ({id}) => {
    const {apartment, notFound} = useGetApartment(id);
    if (notFound) {
        return (
            <div>Apartment not found.</div>
        )
    }
    if (!apartment) {
        return <Spinner/>;
    }
    return (
        <ApartmentDetails apartment={apartment}/>
    );
}

function useGetApartment(id: string) {
    const [apartment, setApartment] = useState<Apartment>();
    const [notFound, setNotFound] = useState<boolean>(false);
    useEffect(() => {
        apiService.getApartment(id).then((res: Apartment | undefined) => {
            if (!res) {
                setNotFound(true);
            } else {
                setApartment(res);
            }
        }, error => setNotFound(true))
    }, [id]);

    return {apartment, notFound};
}

export default ApartmentDetailsContainer;

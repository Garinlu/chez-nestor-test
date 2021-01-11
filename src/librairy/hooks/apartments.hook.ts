import {useEffect, useState} from "react";
import {Apartment} from "../../models/apartment";
import apiService from "../../services/api.service";


export function useGetApartments() {
    const [apartments, setApartments] = useState<Apartment[]>();
    useEffect(() => {
        apiService.getApartments().then((res: Apartment[]) => {
            setApartments(res);
        })
    }, []);
    return apartments;
}

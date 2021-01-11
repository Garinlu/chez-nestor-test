import React from "react";
import ApartmentDetailsContainer from "./ApartmentDetailsContainer";
import {RouteComponentProps, useParams} from "@reach/router";
import Spinner from "../../../main/spinner/Spinner";


const Apartment: React.FC<RouteComponentProps> = () => {
    const params = useParams()
    if (!params.id) {
        return <Spinner/>;
    }
    return (
        <ApartmentDetailsContainer id={params.id}/>
    );
}

export default Apartment;

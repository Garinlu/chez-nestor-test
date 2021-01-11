import {RouteComponentProps, useParams} from "@reach/router";
import ClientDetailsContainer from "./ClientDetailsContainer";
import React from "react";

const Client: React.FC<RouteComponentProps> = () => {
    const params = useParams();
    return <ClientDetailsContainer id={params.id}/>;
}

export default Client;

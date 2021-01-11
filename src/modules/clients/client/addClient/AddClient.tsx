import React from "react";
import {RouteComponentProps} from "@reach/router";
import ClientFormContainer from "./ClientFormContainer";

const AddClient: React.FC<RouteComponentProps> = () => {
    return (
        <div>
            <h1>Add client</h1>
            <ClientFormContainer/>
        </div>
    );
}

export default AddClient;

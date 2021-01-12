import React from "react";
import {RouteComponentProps} from "@reach/router";
import ClientFormContainer from "./ClientFormContainer";
import { H1 } from "../../../../librairy/styled/theme";

const AddClient: React.FC<RouteComponentProps> = () => {
    return (
        <div>
            <H1>Add client</H1>
            <ClientFormContainer/>
        </div>
    );
}

export default AddClient;

import React from "react";
import { H1 } from "../../../librairy/styled/theme";
import {Client} from "../../../models/client";

const ClientDetails: React.FC<{ client: Client }> = ({client}) => {
    return (
        <div>
            <H1>{client.fullName}</H1>
            <ul>
                <li>First Name: {client.firstName}</li>
                <li>Last Name: {client.lastName}</li>
                <li>Email: {client.email}</li>
                <li>Birth Date: {client.formattedBirthDate}</li>
                <li>Nationality: {client.nationality || 'Unknown'}</li>
                <li>Phone: {client.phone || 'Unknown'}</li>
            </ul>
        </div>
    );
}

export default ClientDetails;

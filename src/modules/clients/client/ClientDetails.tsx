import React from "react";
import {Client} from "../../../models/client";

const ClientDetails: React.FC<{ client: Client }> = ({client}) => {
    return (
        <div>
            <h1>{client.fullName}</h1>
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

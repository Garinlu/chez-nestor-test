import React from "react";
import {RouteComponentProps} from "@reach/router";
import ApartmentFormContainer from "./ApartmentFormContainer";
import {H1} from "../../../../librairy/styled/theme";

const AddApartment: React.FC<RouteComponentProps> = () => {
    return (
        <div>
            <H1>Add apartment</H1>
            <ApartmentFormContainer/>
        </div>
    );
}

export default AddApartment;

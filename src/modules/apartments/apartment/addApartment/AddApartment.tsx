import React from "react";
import {RouteComponentProps} from "@reach/router";
import ApartmentFormContainer from "./ApartmentFormContainer";

const AddApartment: React.FC<RouteComponentProps> = () => {
    return (
        <div>
            <h1>Add apartment</h1>
            <ApartmentFormContainer/>
        </div>
    );
}

export default AddApartment;

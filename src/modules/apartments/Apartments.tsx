import {RouteComponentProps, useNavigate} from "@reach/router";
import React from "react";
import ListApartmentsContainer from "./ListApartmentsContainer";
import Button from "../../main/button/Button";

const Apartments: React.FC<RouteComponentProps> = (props) => {
    const navigate = useNavigate();
    const goAdd = () => {
        navigate('/add/apartment');
    };
    return (
        <div>
            <h1>Apartments</h1>
            <Button label={'Add apartment'} callback={goAdd}/>
            <ListApartmentsContainer/>
        </div>
    );
}

export default Apartments;

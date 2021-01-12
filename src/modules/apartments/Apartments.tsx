import {RouteComponentProps, useNavigate} from "@reach/router";
import React from "react";
import ListApartmentsContainer from "./ListApartmentsContainer";
import Button from "../../main/button/Button";
import { H1 } from "../../librairy/styled/theme";

const Apartments: React.FC<RouteComponentProps> = (props) => {
    const navigate = useNavigate();
    const goAdd = () => {
        navigate('/add/apartment');
    };
    return (
        <div>
            <H1>Apartments</H1>
            <Button label={'Add apartment'} callback={goAdd}/>
            <ListApartmentsContainer/>
        </div>
    );
}

export default Apartments;

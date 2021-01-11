import React from "react";
import {Card} from "../../librairy/styled/theme";

const CardContainer: React.FC = (props) => {
    return (
        <Card>
            {props.children}
        </Card>
    );
}

export default CardContainer;

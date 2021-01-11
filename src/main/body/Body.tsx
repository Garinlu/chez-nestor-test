import React from "react";
import Routing from "../../librairy/routing/Routing";
import {BodyContainer} from "../../librairy/styled/theme";

const Body: React.FC<any> = () => {
    return (
        <BodyContainer>
            <Routing/>
        </BodyContainer>
    );
}

export default Body;

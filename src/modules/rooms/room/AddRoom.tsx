import React from "react";
import {RouteComponentProps, useNavigate, useParams} from "@reach/router";
import RoomFormContainer from "./RoomFormContainer";
import Button from "../../../main/button/Button";
import { H1 } from "../../../librairy/styled/theme";

const AddRoom: React.FC<RouteComponentProps> = () => {
    const params = useParams()
    const navigate = useNavigate()
    return (
        <div>
            <H1>Add Room</H1>
            <Button label={'Back to apartment'} callback={() => {
                navigate('/apartments/' + params.id);
            }}/>
            <RoomFormContainer apartmentId={params.id}/>
        </div>
    );
}

export default AddRoom;

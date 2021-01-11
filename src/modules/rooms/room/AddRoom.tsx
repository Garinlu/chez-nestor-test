import React from "react";
import {RouteComponentProps, useNavigate, useParams} from "@reach/router";
import RoomFormContainer from "./RoomFormContainer";
import Button from "../../../main/button/Button";

const AddRoom: React.FC<RouteComponentProps> = () => {
    const params = useParams()
    const navigate = useNavigate()
    return (
        <div>
            <h1>Add Room</h1>
            <Button label={'Back to apartment'} callback={() => {
                navigate('/apartments/' + params.id);
            }}/>
            <RoomFormContainer apartmentId={params.id}/>
        </div>
    );
}

export default AddRoom;

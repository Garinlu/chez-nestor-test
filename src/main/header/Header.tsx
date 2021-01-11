import React from "react";
import NavLink from "../navLink/NavLink";
import {Menu, MenuItem, Nav} from "../../librairy/styled/theme";

const Header: React.FC<any> = () => {
    return (
        <Nav>
            <h4>Chez Nestor Technical Test</h4>
            <Menu>
                <MenuItem><NavLink to={"/"}>Home</NavLink></MenuItem>
                <MenuItem><NavLink to={"/apartments"}>Apartments</NavLink></MenuItem>
                <MenuItem><NavLink to={"/rooms"}>Rooms</NavLink></MenuItem>
                <MenuItem><NavLink to={"/clients"}>Clients</NavLink></MenuItem>
                <MenuItem><NavLink to={"/bookings"}>Bookings</NavLink></MenuItem>
            </Menu>
        </Nav>
    );
}
export default Header;

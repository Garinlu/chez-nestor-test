import React from "react";
import NavLink from "../navLink/NavLink";
import {H4, Menu, MenuItem, Nav, ThemeType} from "../../librairy/styled/theme";
import ThemeSelector from "./ThemeSelector";

const Header: React.FC<{toggleTheme: (theme: ThemeType) => void}> = ({toggleTheme}) => {
    return (
        <Nav>
            <H4>Chez Nestor Technical Test</H4>
            <Menu>
                <MenuItem><NavLink to={"/"}>Home</NavLink></MenuItem>
                <MenuItem><NavLink to={"/apartments"}>Apartments</NavLink></MenuItem>
                <MenuItem><NavLink to={"/rooms"}>Rooms</NavLink></MenuItem>
                <MenuItem><NavLink to={"/clients"}>Clients</NavLink></MenuItem>
                <MenuItem><NavLink to={"/bookings"}>Bookings</NavLink></MenuItem>
                <MenuItem><ThemeSelector toggleTheme={toggleTheme}/></MenuItem>
            </Menu>
        </Nav>
    );
}
export default Header;

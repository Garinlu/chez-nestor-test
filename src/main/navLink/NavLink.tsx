import {Link} from "@reach/router";
import React from "react";

const NavLink: React.FC<any> = (props: any) => {
    return (
        <Link
            {...props}
            getProps={({isCurrent}) => ({
                className: isCurrent ? 'active' : ''
            })}
        />
    );
}

export default NavLink;

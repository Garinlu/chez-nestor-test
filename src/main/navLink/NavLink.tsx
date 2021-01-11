import {Link} from "@reach/router";
import React from "react";

const NavLink: React.FC<any> = (props: any) => {
    return (
        <Link
            {...props}
            getProps={({isCurrent}) => ({
                style: {
                    color: isCurrent ? "darkGrey" : "black"
                }
            })}
        />
    );
}

export default NavLink;

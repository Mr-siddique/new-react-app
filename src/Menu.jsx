import React from "react";
import {NavLink} from "react-router-dom";
const Menu=()=>{
return (
    <>
    <div className="nav_container">
        <NavLink className="link" exact activeClassName="active" to="/">Mr_siddique</NavLink>
        <NavLink className="link" exact activeClassName="active" to="/">Home</NavLink>
        <NavLink className="link" exact activeClassName="active" to="/contact">Contact</NavLink>
        <NavLink className="link" exact activeClassName="active" to="/about">About</NavLink>
        <NavLink className="link" exact activeClassName="active" to="/Service">Service</NavLink>
    </div>
    </>
)
}
export default Menu;
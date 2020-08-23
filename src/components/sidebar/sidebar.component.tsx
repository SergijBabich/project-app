import React from "react";
import { NavLink, Route } from 'react-router-dom'

const Sidebar = (props) => {
    return (
        <nav>
            <NavLink to="/main/projects" activeClassName="selected">My projects </NavLink>
            <NavLink to="/main/create-project" activeClassName="selected">Create project</NavLink>
            <NavLink to="/about" activeClassName="selected">Log out</NavLink>

        </nav>
    )
}

export default Sidebar;

import React from "react";
import { NavLink, Route } from 'react-router-dom'
import s from './sidebar.module.css'
const Sidebar = () => {
    const onEndSession = () => {
        localStorage.clear();
    }
    return (
        <nav>
            <div className={s.sidebar}>
                <NavLink to="/main/projects" activeClassName="selected">My projects </NavLink>
                <NavLink to="/main/create-project" activeClassName="selected">Create project</NavLink> 
                <NavLink to="/login" activeClassName="selected"><div onClick={onEndSession}>Log Out</div></NavLink>
                <NavLink to="/main/settings" activeClassName="selected">Settings</NavLink> 
            </div>
            

        </nav>
    )
}

export default Sidebar;

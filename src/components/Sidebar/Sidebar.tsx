import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = () => {
  const onEndSession = (): void => {
    localStorage.clear();
  }
  return (
    <nav>
      <div className='sidebar'>
        <NavLink to='/main/projects' activeClassName='selected'>My projects </NavLink>
        <NavLink to='/main/create-project' activeClassName='selected'>Create project</NavLink> 
        <NavLink to='/login' activeClassName='selected'><div onClick={onEndSession}>Log Out</div></NavLink>
        <NavLink to='/main/settings' activeClassName='selected'>Settings</NavLink> 
      </div>
    </nav>
  )
}

export default Sidebar;

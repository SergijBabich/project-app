import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import {SidebarProps} from './Sidebar-modules';

const Sidebar = (props: SidebarProps) => {

  const onEndSession = (): void => {
    props.closeSession(true);
  };

  return (
    <nav>
      <div className='sidebar'>
        <NavLink to='/main/projects' activeClassName='selected'>{props.t('sidebar.projects')}</NavLink>
        <NavLink to='/main/create-project' activeClassName='selected'>{props.t('sidebar.createProject')}</NavLink> 
        <NavLink to='/login' activeClassName='selected'><div onClick={onEndSession}>{props.t('sidebar.logOut')}</div></NavLink>
        <NavLink to='/main/settings' activeClassName='selected'>{props.t('sidebar.settings')}</NavLink> 
      </div>
    </nav>
  );
};

export default Sidebar;

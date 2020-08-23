
import React from 'react';
import {connect} from   'react-redux';
import ProjectGeneral from './project-general.component';
import {getUsersProjects, editUserProject} from '../../redux/project-reducer'
let mapStateToprops = (state: any) => {
  return {
    token: state.login.token,
    projectsList: state.projects.projectsList
  }

}


const ProjectGeneralContainer = connect(mapStateToprops, {getUsersProjects, editUserProject} )(ProjectGeneral);
export default ProjectGeneralContainer;
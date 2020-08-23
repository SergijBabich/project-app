
import React from 'react';
import {connect} from   'react-redux';
import ProjectCreator from './project_creator.component';
import {createUsersProject} from '../../redux/project-сreator-reducer'
let mapStateToprops = (state: any) => {
  return {
    token: state.login.token,
    projectId: state.projectCreator.projectId
  }

}


const ProjectCreatorContainer = connect(mapStateToprops, {createUsersProject} )(ProjectCreator);
export default ProjectCreatorContainer;
import {connect} from   'react-redux';
import ProjectGeneral from './project-general.component';
import {getUsersProjects, editUserProject, removeUsersProject} from '../../redux/project-reducer'
let mapStateToprops = (state: any) => {
  return {
    token: state.login.token,
    projectsList: state.projects.projectsList,
    status: state.projects.status
  }

}


const ProjectGeneralContainer = connect(mapStateToprops, {getUsersProjects, editUserProject, removeUsersProject} )(ProjectGeneral);
export default ProjectGeneralContainer;
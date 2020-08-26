import {connect} from 'react-redux';
import {getUsersProjects, editUserProject, removeUsersProject, setInitialValue, setEditMode} from '../../redux/ProjectReducer';
import PropTypes from 'prop-types';
import ProjectsPage from '../ProjectsPage/ProjectsPage';

ProjectsPage.propTypes = {  
  token: PropTypes.string,
  projectsList: PropTypes.array,
  status: PropTypes.string,
  getUsersProjects: PropTypes.func,
  editUserProject: PropTypes.func,
  removeUsersProject: PropTypes.func
}

const mapStateToProps = (state: any) => {
  return {
    token: state.login.token,
	projectsList: state.projects.projectsList,
	status: state.projects.status,
	initialValue: state.projects.initialValue,
	editFlag: state.projects.editFlag
  }
}

const ProjectGeneralContainer = connect(mapStateToProps, {getUsersProjects, editUserProject, removeUsersProject, setInitialValue, setEditMode} )(ProjectsPage)
export default ProjectGeneralContainer
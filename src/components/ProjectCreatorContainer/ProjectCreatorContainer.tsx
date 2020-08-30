import React, {useState} from 'react';
import {connect} from   'react-redux';
import { Redirect} from 'react-router-dom'; 
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import ProjectDescriptionFormRedux from '../ProjectDescriptionForm';
import ProjectTitleFormRedux from '../ProjectTitleForm';
import {createUsersProject, saveProjectTitle} from '../../redux/ProjectCreatorReducer';
import { withTranslation } from 'react-i18next';
import {StateProps, FormValue, ProjectCreatorProps} from './ProjectCreatorContainer-modules';

const ProjectCreator: React.FunctionComponent<ProjectCreatorProps> = (props: ProjectCreatorProps) => {
  const [step, setStep] = useState(1);
  const [checkTtitle, setCheckTitle] = useState(false);
  const history = useHistory();

  const setProjectsTitle = (value: FormValue): void => {
    props.saveProjectTitle(value.title)
    const findTheSameTitleName = props.projectsList.find((el) => el.title === value.title);
    
    if (!findTheSameTitleName) {
      setStep(step +1);
    }
    else {
      setCheckTitle(true);
    }
  };

  const setProjectsDescription = (value: FormValue): void => {
    props.createUsersProject(props.title, value.description.trim(), props.token);
    redirect()
  };

  const redirect = () => {
    if(props.projectsList) {
      history.push('/main/projects');
    }       
  };

  if(!props.token) {
    return <Redirect to={'/login'} />;
  }
 
  const switchForms = () => {  
    switch(step) {
    case 1: 
      return(
        <ProjectTitleFormRedux  t={props.t} checkTtitle={checkTtitle} onSubmit={setProjectsTitle} /> 
      );
    case 2: 
      return(
        <ProjectDescriptionFormRedux t={props.t} onSubmit={setProjectsDescription} />
      );
    default:
      return <div>{props.t('createProject.projectSuccessfullyCreated')}</div>;     
    } 
  };

  return (
    <>
      {
        switchForms()
      }
    </>
  );
};

ProjectCreator.propTypes = {
  token: PropTypes.string,
  projectId: PropTypes.string,
  projectsList:PropTypes.array,
  createUsersProject: PropTypes.func
};

const mapStateToProps = (state: StateProps) => {
  return {
    token: state.login.token,
    projectId: state.projectCreator.projectId,
    projectsList: state.projects.projectsList,
    title: state.projectCreator.title
  };
};

const ProjectCreatorContainer = connect(mapStateToProps, {createUsersProject, saveProjectTitle} )(ProjectCreator);
const ProjectCreatorContainerTranslated = withTranslation('common')(ProjectCreatorContainer); 

export default ProjectCreatorContainerTranslated;
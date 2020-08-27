import React, {useState} from 'react';
import {connect} from   'react-redux';
import { Redirect} from 'react-router-dom'; 
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import ProjectDescriptionFormRedux from '../ProjectDescriptionForm';
import ProjectTitleFormRedux from '../ProjectTitleForm';
import {createUsersProject} from '../../redux/ProjectCreatorReducer';
import { withTranslation } from 'react-i18next';
import {StateProps, FormValue, ProjectCreatorProps} from './ProjectCreatorContainer-modules';

const ProjectCreator: React.FunctionComponent<ProjectCreatorProps> = (props: ProjectCreatorProps) => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState(null);
  const [checkTtitle, setCheckTitle] = useState(false);
  const history = useHistory();

  const setProjectsTitle = (value: FormValue): void => {
    setTitle(value.title);
    const findTheSameTitleName = props.projectsList.find((el) => el.title === value.title);
    
    if (!findTheSameTitleName) {
      setStep(step +1);
    }
    else {
      setCheckTitle(true);
    }
  };

  const setProjectsDescription = (value: FormValue): void => {
    props.createUsersProject(title, value.description.trim(), props.token);
    setStep(step+1);
  };

  const redirect = () => {
    setTimeout(() =>history.push('/main/projects') , 2000);       
  };
  
  if(step ===3 ) {  
    redirect();
  }

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
  };
};

const ProjectCreatorContainer = connect(mapStateToProps, {createUsersProject} )(ProjectCreator);
const ProjectCreatorContainerTranslated = withTranslation('common')(ProjectCreatorContainer); 

export default ProjectCreatorContainerTranslated;
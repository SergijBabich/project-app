import React, {useState} from 'react';
import {connect} from   'react-redux';
import { Redirect} from 'react-router-dom'; 
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import ProjectDescriptionFormRedux from '../ProjectDescriptionForm/ProjectDescriptionForm';
import ProjectTitleFormRedux from '../ProjectTitleForm/ProjectTitleForm';
import {createUsersProject} from '../../redux/ProjectCreatorReducer';

interface ProjectsData {
  _id: string,
  title:string | null,
  description: string,
  token: string
}

interface StateProps {
  token: string
  projectId: string
  projectsList: string
}

interface FormValue {
  title:string | null,
  description: string,
}

interface ProjectCreator {
  createUsersProject: (title: string, desc: string, token: string) => void 
  projectId: string
  projectsList: Array<ProjectsData>
  token: string
}
const ProjectCreator: React.FunctionComponent<ProjectCreator> = (props:ProjectCreator) => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState(null);
  const [checkTtitle, setCheckTitle] = useState(false);
  const history = useHistory();

  const setProjectsTitle = (value: FormValue): void => {
    setTitle(value.title);
    const findTheSameTitleName = props.projectsList.find((el) => el.title === value.title);
    
    if(!findTheSameTitleName) {
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
        <ProjectTitleFormRedux checkTtitle={checkTtitle} onSubmit={setProjectsTitle} /> 
      );
    case 2: 
      return(
        <ProjectDescriptionFormRedux onSubmit={setProjectsDescription} />
      );
    default:
      return <div>Проект успешно создан</div>;     
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
export default ProjectCreatorContainer;
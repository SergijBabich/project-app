import React, {useState} from 'react';
import {connect} from   'react-redux';
import ProjectDescriptionFormRedux from '../ProjectDescriptionForm/ProjectDescriptionForm';
import ProjectTitleFormRedux from '../ProjectTitleForm/ProjectTitleForm'
import {createUsersProject} from '../../redux/ProjectCreatorReducer'
import { Redirect} from "react-router-dom"; 
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types'; 

const ProjectCreator = (props:any) => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState(null);
  const [checkTtitle, setCheckTitle] = useState(false);
  let history = useHistory();

  const setProjectsTitle = (value) => {
    setTitle(value.title);
    let findTheSameTitleName = props.projectsList.find((el) => el.title === value.title);
    
    if(!findTheSameTitleName) {
      setStep(step +1);
    }
    else {
      setCheckTitle(true);
    }
  }

  const setProjectsDescription = (value) => {
    props.createUsersProject(title, value.description.trim(), props.token);
    setStep(step+1);
  }

  const redirect = () => {
    setTimeout(() =>history.push("/main/projects") , 2000);       
  }
  
  if(step ===3 ) {  
    redirect();
  }

  if(!props.token) {
    return <Redirect to={`/login`} />;
  }
 
  const switchForms = () => {  
      switch(step) {
        case 1: 
          return(
            <ProjectTitleFormRedux checkTtitle={checkTtitle} onSubmit={setProjectsTitle} /> 
          )
        case 2: 
          return(
            <ProjectDescriptionFormRedux onSubmit={setProjectsDescription} />
          )
        default:
          return <div>Проект успешно создан</div>;     
      } 
    }

    return (
      <>
        {
          switchForms()
        }
      </>
    )
}

ProjectCreator.propTypes = {
  token: PropTypes.string,
  projectId: PropTypes.string,
  projectsList:PropTypes.array,
  createUsersProject: PropTypes.func
}

let mapStateToProps = (state: any) => {
  return {
    token: state.login.token,
    projectId: state.projectCreator.projectId,
    projectsList: state.projects.projectsList,
  }
}

const ProjectCreatorContainer = connect(mapStateToProps, {createUsersProject} )(ProjectCreator);
export default ProjectCreatorContainer;
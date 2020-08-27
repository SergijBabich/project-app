import React from 'react';
import p from './project-general.module.css';
import ProjectDataView from '../ProjectDataView/ProjectDataView';

interface initialValues {
  _id: string
  title: string
  description: string
  token: string
}


interface ProjectsList {
  token: string,
  projectsList: initialValues,
  initialValue: initialValues,
  editFlag: boolean,
  setEditMode: () => void,
  removeUsersProject: () => void ,
  editUserProject: () => void,
  setInitialValue: (initialValues: initialValues) => void 
  }

const ProjectsList: React.FunctionComponent<ProjectsList> = (props:ProjectsList) => {
  return (
    <div className={p.projects__container}>
      <ProjectDataView initialValue={props.initialValue} 
        editFlag = {props.editFlag}
        setInitialValue = {props.setInitialValue}
        setEditMode={props.setEditMode}
        token={props.token}
        removeUsersProject={props.removeUsersProject}
        editUserProject={props.editUserProject}
        projectsList = {props.projectsList} 
      /> 
    </div>
  );
};
export default ProjectsList;
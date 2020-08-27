import React from 'react';
import ProjectDataView from '../ProjectDataView';
import './ProjectsList.css';
import {ProjectsListProps} from './ProjectsList-modules';

const ProjectsList: React.FunctionComponent<ProjectsListProps> = (props: ProjectsListProps) => {
  return (
    <div className='projects__container'>
      <ProjectDataView initialValue={props.initialValue} 
        editFlag={props.editFlag}
        setInitialValue={props.setInitialValue}
        setEditMode={props.setEditMode}
        token={props.token}
        removeUsersProject={props.removeUsersProject}
        editUserProject={props.editUserProject}
        projectsList={props.projectsList}
        t={props.t} 
      /> 
    </div>
  );
};
export default ProjectsList;
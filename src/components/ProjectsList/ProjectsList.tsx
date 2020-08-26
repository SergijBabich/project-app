import React from "react";
import p from './project-general.module.css'
import ProjectDataView from '../ProjectDataView/ProjectDataView';

interface ProjectsList {
    token: string,
    projectsList: ProjectsList,
    ShowFullProject:object ,
    initialValue: object,
    editFlag: boolean,
    setEditMode: object,
    removeUsersProject:object ,
    editUserProject:object,
    setInitialValue: object
  }

const ProjectsList = (props:ProjectsList) => {
    return (
        <div className={p.projects__container}>
                 <ProjectDataView     initialValue={props.initialValue} 
                                      editFlag = {props.editFlag}
                                          setInitialValue = {props.setInitialValue}
                                          setEditMode={props.setEditMode}
                                          token={props.token}
                                          removeUsersProject={props.removeUsersProject}
                                          editUserProject={props.editUserProject}
                                          projectsList = {props.projectsList} 
             /> 
        </div>

    )
}
export default ProjectsList;
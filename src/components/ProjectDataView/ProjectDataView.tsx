import React, {useState} from 'react';
import DeleteConfirmationWindow from '../DeleteConfirmationWindow/DeleteConfirmationWindow';
import EditProjectFormRedux from '../EditProjectForm/EditProjectForm';
import './ProjectDataView.css';

interface ProjectEditForm {
    titleEdit:string,
    descriptionEdit: string
}

interface initialValues {
  titleEdit: string,
  descriptionEdit: string
}

interface ProjectsData {
  _id: string,
  title:string,
  description: string,
  token: string
}

interface ProjectDataView {
  initialValue: ProjectEditForm
  editFlag: boolean
  setInitialValue: (value: ProjectsData) => void
  setEditMode: (value : boolean) => void
  token: string
  removeUsersProject: () => void
  editUserProject: (title: string, desc: string, id: string, token: string) => void
  projectsList: ProjectsData
}

const ProjectDataView: React.FunctionComponent<ProjectDataView> = (props:ProjectDataView) => {
  const [popap , setPopap] = useState(false);

  const onEditMode = (): void => {                                      
    props.setEditMode(true);
    props.setInitialValue(props.projectsList);
  };
  const onSaveEdit = (value:ProjectEditForm):void => {
    props.editUserProject(value.titleEdit, value.descriptionEdit.trim(), props.projectsList._id, props.token);   
    props.setEditMode(false);
  };

  const onCompfirmDeleteProject = (): void => {
    setPopap(true);
  };

  const deleteProject = (): void => {
    props.removeUsersProject(props.projectsList._id, props.token);
    setPopap(false);
  };

  const cancelDelete = (): void => {
    setPopap(false);
  };

  const onCancelEdit = (): void => {
    props.setEditMode(false);
  };
  
  const getInitialValues = (): initialValues => {
    return {
      titleEdit: props.initialValue.title,
      descriptionEdit: props.initialValue.description
    };
  };  
  return (
    <div  className='project__info'>
      {popap && 
          <DeleteConfirmationWindow cancelDelete={cancelDelete} deleteProject={deleteProject} />
      }
      {!props.editFlag &&
          <div>
            <div className='project__title'>
              {props.projectsList.title}
              <div>
                <button className='button' onClick = {onEditMode} >Edit</button>
              </div>
              <div>
                <button className='button' onClick={onCompfirmDeleteProject} type="button"  name="button">Delete </button> 
              </div>
            </div>
            <div className='project__description'>
              {props.projectsList.description}
            </div>
          </div>
      }
      { props.editFlag &&
          <>
            <div>
              <EditProjectFormRedux onSubmit ={onSaveEdit} 
                projectsList ={props.projectsList} 
                cancelEdit={onCancelEdit}
                initialValues={getInitialValues()}
              />
            </div>
          </>
      }
    </div>    
  );
};

export default ProjectDataView;
import React, {useState} from 'react';
import DeleteConfirmationWindow from '../DeleteConfirmationWindow';
import EditProjectFormRedux from '../EditProjectForm';
import './ProjectDataView.css';
import {ProjectDataViewProps,ProjectEditForm, InitialValues} from './ProjectDataView-models';

const ProjectDataView: React.FunctionComponent<ProjectDataViewProps> = (props: ProjectDataViewProps) => {
  const [popap , setPopap] = useState(false);

  const onEditMode = (): void => {                                      
    props.setEditMode(true);
    props.setInitialValue(props.projectsList);
  };

  const onSaveEdit = (value:ProjectEditForm): void => {
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
  
  const getInitialValues = (): InitialValues => {
    return {
      titleEdit: props.initialValue.title,
      descriptionEdit: props.initialValue.description
    };
  };  

  return (
    <div className='project__info'>
      {popap && 
        <DeleteConfirmationWindow  t={props.t} cancelDelete={cancelDelete} deleteProject={deleteProject} />
      }
      {!props.editFlag?
        <div>
          <div className='project__title'>
            <div>
              <button className='button' onClick={onEditMode} >{props.t('project.edit')}</button>
            </div>
            <div>
              <button className='button' onClick={onCompfirmDeleteProject} type="button" name="button">{props.t('project.delete')}</button> 
            </div>
          </div>
          <div className='project__description'>
            {props.projectsList.description}
          </div>
        </div>:
        <div>
          <EditProjectFormRedux onSubmit={onSaveEdit} 
            projectsList={props.projectsList} 
            cancelEdit={onCancelEdit}
            initialValues={getInitialValues()}
            t={props.t}
          />
        </div>
      }
    </div>    
  );
};

export default ProjectDataView;
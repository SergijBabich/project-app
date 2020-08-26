import React, {useState} from "react"
import DeleteConfirmationWindow from "../DeleteConfirmationWindow/DeleteConfirmationWindow"
import EditProjectFormRedux from "../EditProjectForm/EditProjectForm"
import './ProjectDataView.css'

interface ProjectEditForm {
    titleEdit:string,
    descriptionEdit: string
}

const ProjectDataView = (props:any) => {
  const [popap , setPopap] = useState(false);

  const onEditMode = () => {                                      
	props.setEditMode(true);
  	props.setInitialValue(props.projectsList);
  }
  const onSaveEdit = (value:ProjectEditForm):void => {
	props.editUserProject(value.titleEdit, value.descriptionEdit.trim(), props.projectsList._id, props.token);   
	props.setEditMode(false);
  }

  const onCompfirmDeleteProject = (answer) => {
    setPopap(true);
  }

  const deleteProject = () => {
	props.removeUsersProject(props.projectsList._id, props.token);
	setPopap(false);
  }

  const cancelDelete = () => {
	setPopap(false);
  }

  const onCancelEdit = () => {
	props.setEditMode(false);
  }
  
  const getInitialValues = () => {
    return {
	  titleEdit: props.initialValue.title,
	  descriptionEdit: props.initialValue.description
	}
  }  
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
     )
}

export default ProjectDataView;
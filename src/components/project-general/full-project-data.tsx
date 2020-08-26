import React, {useState} from "react";
import DeleteConfirmationWindow from './delete-confirmation-window'
import EditFormRedux from './edit-form'
import p from './project-general.module.css'

interface ProjectEditForm {
    titleEdit:string,
    descriptionEdit: string
  }
  
interface ProjectsList {
    _id: string,
    title:string,
    description: string,
    token: string
}

const ShowFullProjectData = (props:any) => {
    const [popap , setPopap] = useState(false);

    const onEditMode = () => {                                      
        props.setEditMode(true)
        props.setInitialValue(props.projectsList)
    }
    const onSaveEdit = (value:ProjectEditForm):void => {
        props.editUserProject(value.titleEdit, value.descriptionEdit.trim(), props.projectsList._id, props.token);     
        props.setEditMode(false)

    }

    const onCompfirmDeleteProject = (answer) => {
        setPopap(true);
    }

    const deleteProject = () => {
        props.removeUsersProject(props.projectsList._id, props.token);
        setPopap(false)
    }

    const cancelDelete = () => {
        setPopap(false)
    }

    const onCancelEdit = () => {
        props.setEditMode(false)
    }
    
    const getInitialValues = () => {
        return {
            titleEdit: props.initialValue.title,
            descriptionEdit: props.initialValue.description
        }
    }
   
    return (
     <div  className={p.project__info}>
         {popap && <DeleteConfirmationWindow cancelDelete={cancelDelete} deleteProject={deleteProject} />}
        {  !props.editFlag &&
        <div>
            <div className={p.project__title}>
              {props.projectsList.title}
              <div>
                <button className={p.button} onClick = {onEditMode} >Edit</button>
              </div>
              <div>
                  <button className={p.button} onClick={onCompfirmDeleteProject} type="button"  name="button">Delete </button> 
              </div>
            </div>
            <div className={p.project__description}>
              {props.projectsList.description}
            </div>
         </div>
        }
        { props.editFlag &&
            <>
              <div>
                <EditFormRedux onSubmit ={onSaveEdit} 
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

export default ShowFullProjectData;
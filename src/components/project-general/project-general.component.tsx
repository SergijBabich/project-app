import React, {useEffect, useState } from "react";
import p from './project-general.module.css'
import { Redirect } from "react-router-dom"; 
import { Field, reduxForm, Form } from 'redux-form';
import {Input, Textarea} from '../../utils/form-control';
import {required, checkformat} from '../../utils/validators/validators';

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
interface ShowFullProject {
    setShow: object,
    token: string,
    removeUsersProject: object,
    editUserProject: object,
    projectsList: ProjectsList
}

const ProjectGeneral = (props:any) => {

   useEffect(() => {
     props.getUsersProjects(props.token)
    }, []); 

    if(!props.token) {
        return <Redirect to={`/login`} />;
        }

    return (
        <div className={p.projects}>
          { props.projectsList.map( (el:ProjectsList , index:number) => {
             return  <ProjectsList   key={index} status={props.status} removeUsersProject={props.removeUsersProject}  getUsersProjects={props.getUsersProjects} token={props.token} editUserProject={props.editUserProject}  projectsList ={el} />
           }) }
        </div>

    )
}

const ProjectsList = (props:ShowFullProject) => {

    const [show, setShow] = useState(false);

    const onShowDescription = () => {       
        setShow(!show)
    }

    return (
        <div className={p.projects__container}>
            <div className={p.projects__list}>
                <div className={p.project__title}>{props.projectsList.title}</div>
                <div className={p.project__button}>
                     <button  className={p.button}  onClick={ onShowDescription} >Expander</button>
                </div>  
            </div>
            {show && <ShowFullProjectData setShow={setShow} 
                                          token={props.token}
                                          removeUsersProject={props.removeUsersProject}
                                          editUserProject={props.editUserProject}
                                          projectsList = {props.projectsList} 
             /> }
        </div>

    )
}

const ShowFullProjectData = (props:any) => {
    const [popap , setPopap] = useState(false);
    const [edit, setEdit] = useState('disable');

    const onEditMode = () => {
        setEdit('enable')
    }

    const onSaveEdit = (value:ProjectEditForm):void => {
        props.editUserProject(value.titleEdit, value.descriptionEdit.trim(), props.projectsList._id, props.token);
          hideForm();        
    }
    const hideForm = () => {
        props.setShow(false)
        setEdit('disable')
    }

    const onCompfirmDeleteProject = (answer) => {
        setPopap(true);
    }

    const deleteProject = () => {
        props.removeUsersProject(props.projectsList._id, props.token);
        props.setShow(false)
    }

    const cancelDelete = () => {
        props.setShow(false)
    }

    return (
     <div  className={p.project__info}>
         {popap && <DeleteConfirmationWindow cancelDelete={cancelDelete} deleteProject={deleteProject} />}
        { edit === 'disable' && 
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
        { edit === 'enable' &&
            <>
              <div>
                <EditFormRedux onSubmit ={onSaveEdit} 
                               projectsList ={props.projectsList} 
                               initialValues={{
                                                titleEdit: props.projectsList.title,
                                                descriptionEdit:props.projectsList.description
                                                }}
                                                 />
              </div>
            </>
        }
     </div>    
        
    )
}

const DeleteConfirmationWindow = (props) => {
    const onDeleteProject = () => {
        props.deleteProject();
    }
    const onCancel = () => {
        props.cancelDelete();
    }
    return (
        <div className={p.modal}>
          <div className={p.modal__window}>
            <div className={p.window__title}>
                    <h3>Do you really wanna delete the project</h3>
                </div>
                <div className={p.window__button}>
                    <div className={p.window__button_action}>
                        <button className={p.button} onClick={onDeleteProject} type="button"  name="button">Delete </button> 
                    </div>
                    <div className={p.window__button_action}>
                        <button className={p.button} onClick={onCancel} type="button"  name="button">Cancel </button> 
                    </div>
                 </div>
           </div>
        </div>
    )
}


const EditForm = (props:any) => {
    return (
        <>
         <form  className={p.form} onSubmit = {props.handleSubmit} >
             <Field component={Input}  validate={[required, checkformat]}    name={'titleEdit'}  />
             <Field component={Textarea}  cols="40" rows="10"  className={p.textarea} validate={[required]} name={'descriptionEdit'}   />
             <button>Submit</button>
          </form>   
        </>
    )
}

export const EditFormRedux = reduxForm({
    form:'editForm',
    enableReinitialize: true
  })(EditForm)


export default ProjectGeneral;
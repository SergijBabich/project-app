import React, {useEffect, useState} from "react";
import p from './project-general.module.css'
import { Redirect, Link } from "react-router-dom"; 
import { Field, reduxForm } from 'redux-form';
import {Input} from '../../utils/form-control';
import {File} from '../../utils/form-control';
import {required , maxLengthCreator, minLengthCreator} from '../../utils/validators/validators';
import { connect } from "react-redux";

const ProjectGeneral = (props:any) => {
    console.log(props)
   useEffect(() => {
         getUsersProjects();
    }, []); 
    
  const getUsersProjects = () => {  
     props.getUsersProjects(props.token)
    }

    if(!props.token) {
        return <Redirect to={`/login`} />;
        }

    return (
        <div>
          { props.projectsList.map( el => {
             return  <ProjectsList   token={props.token} editUserProject={props.editUserProject}  projectsList ={el} />
           }) }
        </div>

    )
}

const ProjectsList = (props) => {
    const [show, setShow] = useState(false);
    const onShowDescription = () => {
        setShow(show)
        setShow(!show)
    }
    return (
        <div>
            <div className={p.list}>
                <div>{props.projectsList.title}</div>
                <button onClick= {onShowDescription} >Expander</button>
            </div>
            {show && <ShowFullProjectData token={props.token} editUserProject={props.editUserProject} projectsList = {props.projectsList}  /> }
        </div>

    )
}

const ShowFullProjectData = (props) => {
    const [edit, setEdit] = useState('disable');
    const onEditMode = () => {
        console.log(props)
        setEdit('enable')
    }
    const onSaveEdit = (value) => {
        props.editUserProject(value.titleEdit, value.descriptionEdit, props.projectsList._id)
    }
    return (
     <div>
        { edit === 'disable' && 
        <>
            <div>
              {props.projectsList.title}
              <button onClick = {onEditMode} >Edit</button>
            </div>
            <div>
              {props.projectsList.description}
            </div>
        </>}
        { edit === 'enable' &&
            <>
              <div>
                <EditFormRedux onSubmit ={onSaveEdit}  projectsList ={props.projectsList} initialValues={{titleEdit: props.projectsList.title,descriptionEdit:props.projectsList.description}} />
              </div>
            </>
        }
     </div>    
        
    )
}


const EditForm = (props:any) => {
    return (
        <div>
         <form  onSubmit = {props.handleSubmit} >
             <Field component={Input}   name='titleEdit'  />
             <Field component={Input}   name={'descriptionEdit'}   />
             <button> Submit</button>
          </form>   
        </div>
    )
}

export const EditFormRedux = reduxForm({
    form:'EditForm',
    enableReinitialize: true
  })(EditForm)


export default ProjectGeneral;
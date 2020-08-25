import React, {useState} from "react";
import { Field, reduxForm } from 'redux-form';
import {Input, Textarea} from '../../utils/form-control';
import {File} from '../../utils/form-control';
import { Redirect} from "react-router-dom"; 
import {required, checkformat} from '../../utils/validators/validators';
import { useHistory } from "react-router-dom";
import p from './project-creator.module.css'

interface Form {
    title?: string,
    description?:string
}

const ProjectCreator = (props:any) => {
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState(null);
    const [checkTtitle, setCheckTitle] = useState(false);
    let history = useHistory();

    const setProjectsTitle = (value:Form) => {
       setTitle(value.title);
       let findTheSameTitleName = props.projectsList.find((el) => el.title === value.title);

       if(!findTheSameTitleName) {
        setStep(step +1)
       } else {
        setCheckTitle(true);
       }

    }
    
    const checkValueTitle = () => {
        return (
            <div>
                no no no
            </div>
        )
    }

    const setProjectsDescription = (value:Form) => {
        props.createUsersProject(title, value.description, props.token);
        setStep(step+1)
    }

    const redirect = () => {
        setTimeout(() =>history.push("/main/projects") , 2000);       
    }
    
    if(step ===3 ) {  
        redirect()
    }

    if(!props.token) {
        return <Redirect to={`/login`} />;
    }
   

    const switchForms = () => {  
        switch(step) {
            case 1: 
            return(
                <ProjestsTitleRedux checkTtitle={checkTtitle} onSubmit={setProjectsTitle} /> 
            )
            case 2: 
            return(
                <ProjestsDescriptionRedux onSubmit={setProjectsDescription} />
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



const ProjestsTitleForm = (props:any) => {
    return (
        <>
         <form   className={p.form} onSubmit = {props.handleSubmit}>
             <h3 >Enter title</h3>
             <Field component={Input}     validate={[required, checkformat]}  name={'title'}  placeholder='String from soung' />
             <button> Next </button>
             {props.checkTtitle && <div className={p.error}>this title already exist </div>}
          </form>   
          {}
        </>
    )
}

const ProjestsDescriptionForm = (props:any) => {
    return (
        <>
         <form   className={p.form} onSubmit = {props.handleSubmit}>
             <h1 >Enter description </h1>
             <Field component={Textarea}  cols="40" rows="10"  className={p.textarea} validate={[required]}  name={'description'}/>
             <button> Submit</button>
          </form>   
        </>
    )
}


const ProjestsTitleRedux = reduxForm({
    form:'title'
  })(ProjestsTitleForm)

const ProjestsDescriptionRedux = reduxForm({
    form:'description'
  })(ProjestsDescriptionForm)

export default ProjectCreator;
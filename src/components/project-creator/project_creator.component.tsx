import React, {useState} from "react";
import { Field, reduxForm } from 'redux-form';
import {Input} from '../../utils/form-control';
import {File} from '../../utils/form-control';
import { Redirect, Link } from "react-router-dom"; 
import {required , maxLengthCreator, minLengthCreator} from '../../utils/validators/validators';
import { useHistory } from "react-router-dom";


const ProjectCreator = (props:any) => {
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState(null);
    let history = useHistory();
    console.log(props)
    const setProjectsTitle = (value) => {
        setTitle(value.title);
        setStep(step +1)
    }

    const setProjectsDescription = (value) => {
        props.createUsersProject(title, value.description, props.token);
        setStep(step+1)
        redirect(step)
    }

    const redirect = (step:number) => {
        if(step === 2 && props.projectId) {
            history.push("/main/projects");
       }
    }

    if(!props.token) {
        return <Redirect to={`/login`} />;
    }
   

    const switchForms = () => {     
        switch(step) {
            case 1: 
            return(
                <ProjestsTitleRedux onSubmit={setProjectsTitle} />
            )
            case 2: 
            return(
                <ProjestsDescriptionRedux onSubmit={setProjectsDescription} />
            )
            default:
                return <div>lol</div>;     
        } 
      }

    return (
        <div>
            {
                switchForms()
            }
        </div>

    )
}



const ProjestsTitleForm = (props:any) => {
    return (
        <div>
         <form  onSubmit = {props.handleSubmit}>
             <h1 >Enter song fragment</h1>
             <Field component={Input}     validate={[required]}  name={'title'}  placeholder='String from soung' />
             
             <button> Next </button>
          </form>   
        </div>
    )
}

const ProjestsDescriptionForm = (props:any) => {
    return (
        <div>
         <form  onSubmit = {props.handleSubmit}>
             <h1 >Enter </h1>
             <Field component={Input}     validate={[required]}  name={'description'}  placeholder='String from soung' />
             <button> Submit</button>
          </form>   
        </div>
    )
}


const ProjestsTitleRedux = reduxForm({
    form:'postSound'
  })(ProjestsTitleForm)

const ProjestsDescriptionRedux = reduxForm({
    form:'postSound'
  })(ProjestsDescriptionForm)

export default ProjectCreator;
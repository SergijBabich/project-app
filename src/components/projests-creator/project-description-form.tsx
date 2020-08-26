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


const ProjestsDescriptionRedux = reduxForm({
    form:'description'
  })(ProjestsDescriptionForm)

export default ProjestsDescriptionRedux;
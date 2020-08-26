import React, {useState} from "react";
import { Field, reduxForm } from 'redux-form';
import {Input, Textarea} from '../../utils/form-control';
import {File} from '../../utils/form-control';
import p from './project-creator.module.css'
import { Redirect} from "react-router-dom"; 
import {required, checkformat} from '../../utils/validators/validators';
import { useHistory } from "react-router-dom";

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

const ProjestsTitleRedux = reduxForm({
    form:'title'
  })(ProjestsTitleForm)

  export default ProjestsTitleRedux;
import React, {useEffect, useState } from "react";
import p from './project-general.module.css'
import { Redirect } from "react-router-dom"; 
import { Field, reduxForm, Form } from 'redux-form';
import {Input, Textarea} from '../../utils/form-control';
import {required, checkformat} from '../../utils/validators/validators';
import PropTypes from 'prop-types'; 

const EditForm = (props:any) => {
    const onCancelEdit = () => {
      props.cancelEdit();
    }
    console.log(props)
    return (
        <>
         <form  className={p.form} onSubmit = {props.handleSubmit} >
             <Field component={Input}  validate={[required, checkformat]}    name='titleEdit'  />
             <Field component={Textarea}  cols="40" rows="10"  className={p.textarea} validate={[required]} name='descriptionEdit'   />
             <button>Submit</button>
             <button onClick={onCancelEdit}>Cancel</button>
          </form>   
        </>
    )
}

export const EditFormRedux = reduxForm({
    form:'editForm',
    enableReinitialize: false
  })(EditForm)


  EditFormRedux.propTypes = {
    projectsList: PropTypes.object,
    cancelEdit: PropTypes.func
  }


export default EditFormRedux;
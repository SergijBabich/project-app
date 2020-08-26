import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Textarea} from '../../utils/form-control';
import {required} from '../../utils/validators/validators';

const ProjectDescriptionForm = (props:any) => {
  return (
    <>
      <form   className='form' onSubmit = {props.handleSubmit}>
        <h1 >Enter description </h1>
        <Field component={Textarea}  cols='40' rows='10'  className='textarea' validate={[required]}  name='description' />
        <button> Submit</button>
      </form>   
    </>
  )
}

const ProjectDescriptionFormRedux = reduxForm({
    form:'description'
  })(ProjectDescriptionForm)

export default ProjectDescriptionFormRedux;
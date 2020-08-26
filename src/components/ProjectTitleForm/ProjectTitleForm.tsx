import React from "react";
import { Field, reduxForm } from 'redux-form';
import {Input} from '../../utils/form-control';
import {required, checkformat} from '../../utils/validators/validators';

const ProjectTitleForm = (props:any) => {
    return (
        <>
         <form   className='form' onSubmit = {props.handleSubmit}>
             <h3 >Enter title</h3>
             <Field component={Input}     validate={[required, checkformat]}  name={'title'}  placeholder='String from soung' />
             <button> Next </button>
             {props.checkTtitle && <div className='error'>this title already exist </div>}
          </form>   
          {}
        </>
    )
}

const ProjectTitleFormRedux = reduxForm({
    form:'title'
  })(ProjectTitleForm)

  export default ProjectTitleFormRedux;
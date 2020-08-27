import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Textarea} from '../../utils/form-control';
import {required} from '../../utils/Validators/validators';
import {ProjectDescriptionFormProps} from './ProjectDescriptionForm-models';
 

const ProjectDescriptionForm: React.FunctionComponent<ProjectDescriptionFormProps> = (props: ProjectDescriptionFormProps) => {
  return (
    <form className='form' onSubmit={props.handleSubmit}>
      <h1>{props.t('createProject.description')}</h1>
      <Field component={Textarea} cols='40' rows='10' className='textarea' validate={[required]} name='description' />
      <button>{props.t('createProject.submit')}</button>
    </form>   
  );
};

const ProjectDescriptionFormRedux = reduxForm({
  form:'description'
})(ProjectDescriptionForm);

export default ProjectDescriptionFormRedux;
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Input} from '../../utils/form-control';
import {required, checkformat} from '../../utils/Validators/validators';
import {ProjectTitleFormProps} from './ProjectTitleForm-modules';
import './ProjectTitleForm.css';

const ProjectTitleForm: React.FunctionComponent<ProjectTitleFormProps> = (props: ProjectTitleFormProps) => {
  return (
    <form className='form' onSubmit={props.handleSubmit}>
      <h3>{props.t('createProject.title')}</h3>
      <Field component={Input} validate={[required, checkformat]} name={'title'} placeholder={props.t('createProject.titlePlaceholder')} />
      <button>{props.t('createProject.nextStep')}</button>
      {props.checkTtitle && <div className='error'>{props.t('createProject.error')}</div>}
    </form>   
  );
};

const ProjectTitleFormRedux = reduxForm({
  form:'title'
})(ProjectTitleForm);

export default ProjectTitleFormRedux;
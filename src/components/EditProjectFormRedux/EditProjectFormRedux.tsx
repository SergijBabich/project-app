import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types' ;
import {Input, Textarea} from '../../utils/form-control';
import {required, checkformat} from '../../utils/Validators/validators';
import './EditProjectFormRedux.css';
import {EditProjectProps} from './EditProjectFormRedux-models';

const EditProjectForm: React.FunctionComponent<EditProjectProps>=(props: EditProjectProps) => {
  const onCancelEdit = (): void => {
    props.cancelEdit();
  };

  return (
    <form className='form' onSubmit={props.handleSubmit} >
      <Field component={Input} validate={[required, checkformat]} name='titleEdit' />
      <Field component={Textarea} cols='40' rows='10' className='textarea' validate={[required]} name='descriptionEdit' />
      <button>{props.t('project.submit')}</button>
      <button onClick={onCancelEdit}>{props.t('project.cancel')}</button>
    </form>
  );
};

export const EditProjectFormRedux = reduxForm({
  form: 'editForm',
  enableReinitialize: false
})(EditProjectForm);

EditProjectFormRedux.propTypes = {
  projectsList: PropTypes.object,
  cancelEdit: PropTypes.func,
  initialValues: PropTypes.object
};

export default EditProjectFormRedux;
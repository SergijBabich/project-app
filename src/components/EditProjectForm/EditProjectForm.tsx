import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types' ;
import {Input, Textarea} from '../../utils/form-control';
import {required, checkformat} from '../../utils/validators/validators';
import './EditProjectForm.css';

interface initialValues {
  titleEdit: string,
  descriptionEdit: string
}

interface EditProjectForm {
  projectsList: initialValues,
  cancelEdit: () => void,
  initialValues: initialValues,
  handleSubmit: () => void
}

const EditProjectForm: React.FunctionComponent<EditProjectForm>= (props: EditProjectForm) => {
  const onCancelEdit = (): void => {
    props.cancelEdit();
  };
  return (
    <form  className='form' onSubmit = {props.handleSubmit} >
      <Field component={Input}  validate={[required, checkformat]}    name='titleEdit'  />
      <Field component={Textarea}  cols='40' rows='10'  className='textarea' validate={[required]} name='descriptionEdit'   />
      <button>Submit</button>
      <button onClick={onCancelEdit}>Cancel</button>
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
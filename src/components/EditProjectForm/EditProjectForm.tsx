import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Input, Textarea} from '../../utils/form-control';
import {required, checkformat} from '../../utils/validators/validators';
import PropTypes from 'prop-types' ;
import './EditProjectForm.css';

const EditProjectForm = (props: any) => {
  const onCancelEdit = () => {
	props.cancelEdit()
  }
  return (
    <>
	  <form  className='form' onSubmit = {props.handleSubmit} >
		<Field component={Input}  validate={[required, checkformat]}    name='titleEdit'  />
		<Field component={Textarea}  cols='40' rows='10'  className='textarea' validate={[required]} name='descriptionEdit'   />
		<button>Submit</button>
		<button onClick={onCancelEdit}>Cancel</button>
	  </form>
	</>
  )
}

export const EditProjectFormRedux = reduxForm({
  form: 'editForm',
  enableReinitialize: false
})(EditProjectForm)

EditProjectFormRedux.propTypes = {
  projectsList: PropTypes.object,
  cancelEdit: PropTypes.func
}

export default EditProjectFormRedux;
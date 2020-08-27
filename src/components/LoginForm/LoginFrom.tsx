import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';
import {Input} from '../../utils/form-control';
import {required, minLengthCreator} from '../../utils/validators/validators';
import './LoginForm.css';

interface LoginForm {
  currentToken: string,
  login: string
  errorCode: string,
  handleSubmit: () => void
}

const minLength8 = minLengthCreator(4);

const LoginForm: React.FunctionComponent<LoginForm> = (props: LoginForm) => {
  const history = useHistory();

  if(props.currentToken) {
    history.push('/main/projects');
  }
  
  return (
    <form className='login__form'  onSubmit = {props.handleSubmit}>
      {!props.login? <h3>Log In</h3>:<h3 >Welcome {props.login}</h3> } 
      {!props.login && <Field component={Input}  validate={[required ]}    name={'login'}  placeholder='Enter login' />}
      <Field component={Input}  validate={[required, minLength8]} type='password'    name={'password'}  placeholder='Enter password' />
      <button> Submit</button>
    </form>   
  );
};

const LoginFormRedux = reduxForm({
  form:'loginForm'
})(LoginForm);

export default LoginFormRedux;
  

  

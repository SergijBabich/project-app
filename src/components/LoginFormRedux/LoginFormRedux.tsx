import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';
import {Input} from '../../utils/form-control';
import {required, minLengthCreator} from '../../utils/Validators/validators';
import './LoginFormRedux.css';
import {LoginFormProps} from './LoginFormRedux-models';

const minLengthPassValue = minLengthCreator(4);
const LoginForm: React.FunctionComponent<LoginFormProps> = (props: LoginFormProps) => {
  const history = useHistory();

  if(props.currentToken) {
    history.push('/main/projects');
  }
  
  return (
    <form className='login__form' onSubmit={props.handleSubmit}>
      {!props.login? <h3>{props.t('login.titleLogin')}</h3>:<h3 >{props.t('login.titleLogin')} {props.login}</h3> } 
      {!props.login && <Field component={Input} validate={[required ]} name={'login'} placeholder={props.t('login.loginPlaceholder')} />}
      <Field component={Input} validate={[required, minLengthPassValue]} type='password' name={'password'} placeholder={props.t('login.passPlaceholder')} />
      <button>{props.t('login.submit')}</button>
    </form>   
  );
};

const LoginFormRedux = reduxForm({
  form:'loginForm'
})(LoginForm);

export default LoginFormRedux;
  

  

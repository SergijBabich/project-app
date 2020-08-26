import React from 'react';
import LoginFormRedux from '../LoginForm/LoginFrom';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import './Login.css';
const Login = (props:any) => {
  let history = useHistory();
  let currentToken;
  let  currentFont = JSON.parse(localStorage.getItem('state'));
  if (currentFont) {
    currentToken = currentFont.login.token;
  }

  const onSubmitAuthorization = (value: any) => {        
    if(!props.login) {
      props.sendFormForAuthorization(value.login, value.password);
    } 
    if(props.login) {
      props.sendFormForAuthorization(props.login, value.password);
      setTimeout(()=>history.push('/main/projects'), 150);
    }
  }

  return (
    <div className='form'>
      <LoginFormRedux currentToken={currentToken} login={props.login} errorCode={props.errorCode} onSubmit={onSubmitAuthorization} />
      {props.errorCode && <div className='message' >{props.errorCode}</div> }
    </div>
  )
}

Login.propTypes = {
  token: PropTypes.string,
  status: PropTypes.string,
  login: PropTypes.string,
  errorCode: PropTypes.string,
  sendFormForAuthorization: PropTypes.func
}
export default Login;
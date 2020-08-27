import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import {connect} from 'react-redux';
import './Login.css';
import {sendFormForAuthorization} from '../../redux/LoginReducer';
import LoginFormRedux from '../LoginForm/LoginFrom';

interface LoginProps {
  token:string,
  status:string,
  login:string,
  errorCode:string,
  sendFormForAuthorization?: (login: string, password: string) => void
}

interface FormValue {
  login: string,
  password: string
}

const Login: React.FunctionComponent<LoginProps> = (props:LoginProps) => {
  const history = useHistory();
  let currentToken;
  let  currentFont = JSON.parse(localStorage.getItem('state'));
  if (currentFont) {
    currentToken = currentFont.login.token;
  }

  const onSubmitAuthorization = (value: FormValue): void => {        
    if(!props.login) {
      props.sendFormForAuthorization(value.login, value.password);
    } 
    if(props.login) {
      props.sendFormForAuthorization(props.login, value.password);
      setTimeout(()=>history.push('/main/projects'), 150);
    }
  };

  return (
    <div className='form'>
      <LoginFormRedux currentToken={currentToken} login={props.login} errorCode={props.errorCode} onSubmit={onSubmitAuthorization} />
      {props.errorCode && <div className='message' >{props.errorCode}</div> }
    </div>
  );
};

Login.propTypes = {
  token: PropTypes.string,
  status: PropTypes.string,
  login: PropTypes.string,
  errorCode: PropTypes.string,
  sendFormForAuthorization: PropTypes.func
};

const mapStateToProps = (state: LoginProps) => {
  return {
    token: state.login.token,
    status: state.login.status,
    login: state.login.login,
    errorCode: state.login.errorCode
  };
};

const LoginContainer = connect(mapStateToProps, {sendFormForAuthorization} )(Login);
export default LoginContainer;

import React from 'react';
import {connect} from   'react-redux';
import LoginFormRedux from './login-from.component';
import {sendFormForAuthorization} from '../../redux/login-reducer'
import { useHistory } from "react-router-dom";
import m from './login.module.css';
import PropTypes from 'prop-types'; 

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
          setTimeout(()=>history.push("/main/projects"),150) 
      }
  }

  return (
      <div className={m.form}>
          <LoginFormRedux currentToken={currentToken} login={props.login} errorCode={props.errorCode} onSubmit={onSubmitAuthorization} />
          {props.errorCode && <div className={m.message}>{props.errorCode}</div> }
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

let mapStateToProps = (state: any) => {
  return {
    token: state.login.token,
    status: state.login.status,
    login: state.login.login,
    errorCode: state.login.errorCode
  }

}

const LoginContainer = connect(mapStateToProps, {sendFormForAuthorization} )(Login);



export default LoginContainer;
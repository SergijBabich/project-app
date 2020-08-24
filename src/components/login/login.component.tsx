import React, {useState} from "react";
import { Field, reduxForm } from 'redux-form';
import {Input} from '../../utils/form-control';
import {File} from '../../utils/form-control';
import { Redirect } from "react-router-dom"; 
import {required , maxLengthCreator, minLengthCreator, checkformat} from '../../utils/validators/validators';
import { useHistory } from "react-router-dom";
import m from './login.module.css'
const maxLength20 = maxLengthCreator(20);
const minLength8 = minLengthCreator(4);

const Login = (props:any) => {
    let history = useHistory();
    let currentLogin;
    let currentToken;
    let  currentFont = JSON.parse(localStorage.getItem('state'));
    if (currentFont) {
         currentLogin = currentFont.login.login;
         currentToken = currentFont.login.token;
    }

    const onSubmitAuthorization = (value: any) => {        
        if(!props.login) {
            console.log("right")
            props.sendFormForAuthorization(value.login, value.password);
        } 
        if(props.login) {
            props.sendFormForAuthorization(props.login, value.password);
             history.push("/main/projects")
        }
    }
    if(props.currentLogin && props.currentToken) {
        history.push("/main/projects")
   }
    return (
        <div className={m.form}>
            <LoginFormRedux currentLogin = {currentLogin} currentToken={currentToken} login={props.login} errorCode={props.errorCode} onSubmit={onSubmitAuthorization} />
            {props.errorCode && <div className={m.message}>{props.errorCode}</div> }
          </div>
     

    )
}

const LoginForm = (props:any) => {

    let history = useHistory();

    if(props.currentLogin && props.currentToken) {
         history.push("/main/projects")
    }
    return (
        <>
         <form className={m.login__form}  onSubmit = {props.handleSubmit}>
                  <h1 >Log In</h1>
                {!props.login && <Field component={Input}  validate={[required ]}    name={'login'}  placeholder='Enter login' />}
                                 <Field component={Input}  validate={[required, minLength8]} type='password'    name={'password'}  placeholder='Enter password' />
             <button> Submit</button>
          </form>   
        </>
    )
}

const LoginFormRedux = reduxForm({
    form:'postSound'
  })(LoginForm)
  
export default Login;

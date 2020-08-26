import React, {useState} from "react";
import { Field, reduxForm } from 'redux-form';
import {Input} from '../../utils/form-control';
import {File} from '../../utils/form-control';
import { Redirect } from "react-router-dom"; 
import {required , maxLengthCreator, minLengthCreator, checkformat} from '../../utils/validators/validators';
import { useHistory } from "react-router-dom";
import m from './login.module.css';
const minLength8 = minLengthCreator(4);

const LoginForm = (props:any) => {

    let history = useHistory();

    if(props.currentToken) {
         history.push("/main/projects")
    }
    return (
        <>
         <form className={m.login__form}  onSubmit = {props.handleSubmit}>
                 {!props.login? <h3>Log In</h3>:<h3 >Welcome {props.login}</h3> } 
                 {!props.login && <Field component={Input}  validate={[required ]}    name={'login'}  placeholder='Enter login' />}
                                 <Field component={Input}  validate={[required, minLength8]} type='password'    name={'password'}  placeholder='Enter password' />
             <button> Submit</button>
          </form>   
        </>
    )
}

const LoginFormRedux = reduxForm({
    form:'login-form'
  })(LoginForm)

export default LoginFormRedux;
  

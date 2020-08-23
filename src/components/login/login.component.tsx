import React from "react";
import { Field, reduxForm } from 'redux-form';
import {Input} from '../../utils/form-control';
import {File} from '../../utils/form-control';
import { Redirect } from "react-router-dom"; 
import {required , maxLengthCreator, minLengthCreator} from '../../utils/validators/validators';

const maxLength20 = maxLengthCreator(20);
const minLength8 = minLengthCreator(8);

const Login = (props:any) => {
    
    if( props.status === 'ok' && props.token) {
        return <Redirect to={`/main/projects`} />;
    }

    const onSubmitAuthorization = (value: any) => {
        console.log(value);
        props.sendFormForAuthorization(value.login, value.password)
    }
    return (
        <div>
            <LoginFormRedux onSubmit={onSubmitAuthorization} />
        </div>

    )
}
 
const LoginForm = (props:any) => {
    return (
        <div>
         <form  onSubmit = {props.handleSubmit}>
             <h1 >Enter song fragment</h1>
             <Field component={Input}    name={'login'}  placeholder='String from soung' />
             <Field component={Input}    name={'password'}  placeholder='String from soung' />
             <button> Submit</button>
          </form>   
        </div>
    )
}

const LoginFormRedux = reduxForm({
    form:'postSound'
  })(LoginForm)

  
export default Login;

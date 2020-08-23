
import React from 'react';
import {connect} from   'react-redux';
import Login from './login.component';
import {sendFormForAuthorization} from '../../redux/login-reducer'

let mapStateToprops = (state: any) => {
  return {
    token: state.login.token,
    status: state.login.status
  }

}


const LoginContainer = connect(mapStateToprops, {sendFormForAuthorization} )(Login);
export default LoginContainer;
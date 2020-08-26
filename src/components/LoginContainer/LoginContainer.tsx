import {connect} from 'react-redux';
import {sendFormForAuthorization} from '../../redux/LoginReducer';
import Login from '../Login/Login';

const mapStateToProps = (state: any) => {
  return {
    token: state.login.token,
    status: state.login.status,
    login: state.login.login,
    errorCode: state.login.errorCode
  }
}

const LoginContainer = connect(mapStateToProps, {sendFormForAuthorization} )(Login);
export default LoginContainer;
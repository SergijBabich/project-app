import {UsersApi} from '../api/api' 
import { act } from 'react-dom/test-utils';
const SET_USER_DATA = 'SET-USER-DATA'; 
let initialState = {
   token: null,
   status:null,
   sendCode:null 
  }

  const loginReducer = ( state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA: 
      return {
        token: action.token,
        status: action.status
      }
    default:
        return state
  }
}

const setUserToken = (token, status) => {
  return {
    type: SET_USER_DATA,
    token,
    status
    
  }
  
}

export const sendFormForAuthorization = (login, password) => {
  return  async (dispatch) => {
     let data = await UsersApi.login(login, password);
       dispatch(setUserToken(data.token, data.status))
     console.log(data);  
  }  

  }






export default loginReducer;
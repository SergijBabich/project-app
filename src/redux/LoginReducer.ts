import {UsersApi} from '../api/api' 
import { act } from 'react-dom/test-utils';
const SET_USER_DATA = 'SET-USER-DATA'; 
const SET_ERROR_DATA = 'SET_ERROR_DATA';

 interface initialState {
  token?: string | null,
  status?:string | null,
  sendCode?:string | null,
  login?:string | null,
  errorCode?: string | null
 }
let initialState: initialState = {
   token: null,
   status:null,
   sendCode:null,
   login:null,
   errorCode: null
  }

  const loginReducer = ( state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA: 
      return {
      ...state,  token: action.data.token,
                 status: action.data.status,
                 login: action.data.login,
                 errorCode: action.data.sendCode
      }
    default:
        return state
  }
}

const setUserToken = (data: any) => {
  return {
    type: SET_USER_DATA,
    data
    
  }  
}


export const sendFormForAuthorization = (login: string, password: string) => {
  return  async (dispatch: any) => {
     let data = await UsersApi.login(login, password);
       dispatch(setUserToken(data))
  }  

  }






export default loginReducer;
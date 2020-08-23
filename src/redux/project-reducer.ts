import {UsersApi} from '../api/api' 
import { act } from 'react-dom/test-utils';
const GET_USERS_PROJECTS = 'GET_USERS_PROJECTS'; 
let initialState = {
   token: null,
   projectsList: []
  }

  const projectReducer = ( state = initialState, action: any) => {
  switch (action.type) {
    case GET_USERS_PROJECTS: 
      return {
        projectsList: action.data,

      }
    default:
        return state
  }
}

const getUsersProjectsList = (data) => {
  return {
    type: GET_USERS_PROJECTS,
    data
    
  }
  
}

export const getUsersProjects = (token) => {
  return  async (dispatch) => {
     let data = await UsersApi.getProjectsList(token);
       dispatch(getUsersProjectsList(data))
     console.log(data);  
  }  

  }

  export const editUserProject = (title, description, token) => {
    return  async (dispatch) => {
       let data = await UsersApi.saveEditedProject(title, description, token);
        // dispatch(getUsersProjectsList(data))
       console.log(data);  
    }  
  
    }





export default projectReducer;
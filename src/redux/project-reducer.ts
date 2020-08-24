import {UsersApi} from '../api/api' 
import { act } from 'react-dom/test-utils';
const GET_USERS_PROJECTS = 'GET_USERS_PROJECTS'; 
const EDIT_STATUS = 'EDIT_STATUS';
let initialState = {
   token: null,
   projectsList: [],
   status:null
  }

  const projectReducer = ( state = initialState, action: any) => {
  switch (action.type) {
    case GET_USERS_PROJECTS: 
      return {
         projectsList: action.data,

      }
      case EDIT_STATUS:
        return {
          ...state, status: action.status
        }
    default:
        return state
  }
}

const getUsersProjectsList = (data: object) => {
  return {
    type: GET_USERS_PROJECTS,
    data
    
  }
  
}

const checkEditStatus = (status: string) => {
  return {
    type: EDIT_STATUS,
    status
  }
}

export const editUserProject = (title: string, description: string,id: string, token:string) => {
  return  async (dispatch: any) => {
     let data = await UsersApi.saveEditedProject(title, description,id, token);
       dispatch(getUsersProjectsList(data))
  }  
}

export const getUsersProjects = (token: string) => {
  return  async (dispatch: any) => {
     let data = await UsersApi.getProjectsList(token);
       dispatch(getUsersProjectsList(data)) 
  }  
}
export const removeUsersProject = (id: string, token: string) => {
  return   async (dispatch: any) => {
     let data = await UsersApi.deleteProject(id, token);
     dispatch(getUsersProjectsList(data)) 
  }
}






export default projectReducer;
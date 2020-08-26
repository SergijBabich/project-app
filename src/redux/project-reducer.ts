import {UsersApi} from '../api/api' 
import { act } from 'react-dom/test-utils';
const GET_USERS_PROJECTS = 'GET_USERS_PROJECTS'; 
const EDIT_STATUS = 'EDIT_STATUS';
const SET_INITIAL_VALE = 'SET_INITIAL_VALE';
const FLAG = 'FLAG'
let initialState = {
   token: null,
   projectsList: [],
   status:null,
   initialValue:null,
   editFlag:null
  }

  const projectReducer = ( state = initialState, action: any) => {
  switch (action.type) {
    case GET_USERS_PROJECTS: 
      return {
        ...state, projectsList: action.data,

      }
      case EDIT_STATUS:
        return {
          ...state, status: action.status
        }
        case SET_INITIAL_VALE:
          return {
            ...state, initialValue: action.el,

          }
          case FLAG:
            return {
              ...state, editFlag: action.editFlag
            }
    default:
        return state
  }
}

const getUsersProjectsList = (data: object) => {
  console.log(data)
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
const setMode = (el) => {
  console.log(el)
  return {
    type: SET_INITIAL_VALE,
    el
  }
}

const setFlagMode = (editFlag) => {
  console.log(editFlag)
  return {
    type: FLAG,
    editFlag
  }
}

export const editUserProject = (title: string, description: string,id: string, token:string) => {
  return  async (dispatch: any) => {
     let data = await UsersApi.saveEditedProject(title, description,id, token);
       dispatch(getUsersProjectsList(data))
       console.log(data)
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

export const setInitialValue = (el) => {
  return   async (dispatch: any) => {
     dispatch(setMode(el)) 
  }
}

export const setEditMode = (editFlag) => {
  return   async (dispatch: any) => {
     dispatch(setFlagMode(editFlag)) 
  }
}




export default projectReducer;
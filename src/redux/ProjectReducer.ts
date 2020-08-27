import {UsersApi} from '../api/api'; 
import { act } from 'react-dom/test-utils';
const GET_USERS_PROJECTS = 'GET_USERS_PROJECTS'; 
const EDIT_STATUS = 'EDIT_STATUS';
const SET_INITIAL_VALE = 'SET_INITIAL_VALE';
const FLAG = 'FLAG';

interface ProjectsData {
  _id?: string
  title: string
  description: string
  status?: string
}

interface initialState {
  token: string | null
  projectsList: ProjectsData
  status: string | null
  initialValue: string | null
  editFlag: boolean | null
}

interface projectReducer {
  state: initialState
  action: ProjectsData
}

const initialState = {
  token: null,
  projectsList: [],
  status:null,
  initialValue:null,
  editFlag:null
};

const projectReducer = ( state = initialState, action: any) => {
  switch (action.type) {
  case GET_USERS_PROJECTS: 
    return {
      ...state, projectsList: action.data,
    };
  case EDIT_STATUS:
    return {
      ...state, status: action.status
    };
  case SET_INITIAL_VALE:
    return {
      ...state, initialValue: action.el,

    };
  case FLAG:
    return {
      ...state, editFlag: action.editFlag
    };
  default:
    return state;
  }
};

const getUsersProjectsList = (data: Array<ProjectsData>) => {
  return {
    type: GET_USERS_PROJECTS,
    data  
  };
};

const setMode = (el:ProjectsData) => {
  return {
    type: SET_INITIAL_VALE,
    el
  };
};

const setFlagMode = (editFlag:boolean) => {
  return {
    type: FLAG,
    editFlag
  };
};

export const editUserProject = (title: string, description: string,id: string, token:string) => {
  return  async (dispatch: dispatch) => {
    const data = await UsersApi.saveEditedProject(title, description,id, token);
    dispatch(getUsersProjectsList(data));
  };  
};

export const getUsersProjects = (token: string) => {
  return  async (dispatch: dispatch) => {
    const data = await UsersApi.getProjectsList(token);
    dispatch(getUsersProjectsList(data)); 
  };  
};

export const removeUsersProject = (id: string, token: string) => {
  return   async (dispatch: dispatch) => {
    const data = await UsersApi.deleteProject(id, token);
    dispatch(getUsersProjectsList(data)); 
  };
};

export const setInitialValue = (el) => {
  return   async (dispatch: dispatch) => {
    dispatch(setMode(el)); 
  };
};

export const setEditMode = (editFlag) => {
  return   async (dispatch: dispatch) => {
    dispatch(setFlagMode(editFlag)); 
  };
};

export default projectReducer;
import {UsersApi} from '../api/api';
const GET_USERS_PROJECTS = 'GET_USERS_PROJECTS'; 
const EDIT_STATUS = 'EDIT_STATUS';
const SET_INITIAL_VALE = 'SET_INITIAL_VALE';
const FLAG = 'FLAG';
const SEARCHING_PROJECT = 'SEARCHING_PROJECT';
interface ProjectsData {
  _id?: string
  title: string
  description: string
  status?: string
};

interface initialState {
  token: string | null
  projectsList: ProjectsData
  status: string | null
  initialValue: string | null
  editFlag: boolean | null
};

interface projectReducer {
  state: initialState
  action: ProjectsData
};

const initialState = {
  token: null,
  projectsList: [],
  status:null,
  initialValue:null,
  editFlag:null,
  searchingValue: ''
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
  case SEARCHING_PROJECT:
    return {
      ...state, searchingValue: action.value
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

const setSearchingValue = (value:boolean) => {
  return {
    type: SEARCHING_PROJECT,
    value
  };
};

export const editUserProject = (title: string, description: string,id: string, token:string) => {
  return async (dispatch: dispatch) => {
    const data = await UsersApi.saveEditedProject(title, description,id, token);
    dispatch(getUsersProjectsList(data));
  };  
};

export const getUsersProjects = (token: string) => {
  return async (dispatch: dispatch) => {
    const data = await UsersApi.getProjectsList(token);
    dispatch(getUsersProjectsList(data)); 
  };  
};

export const removeUsersProject = (id: string, token: string) => {
  return async (dispatch: dispatch) => {
    const data = await UsersApi.deleteProject(id, token);
    dispatch(getUsersProjectsList(data)); 
  };
};

export const setInitialValue = (el) => {
  return async (dispatch: dispatch) => {
    dispatch(setMode(el)); 
  };
};

export const setEditMode = (editFlag) => {
  return async (dispatch: dispatch) => {
    dispatch(setFlagMode(editFlag)); 
  };
};

export const projectSearching = (value) => {
  return async (dispatch: dispatch) => {
    dispatch(setSearchingValue(value)); 
  };
};


export default projectReducer;
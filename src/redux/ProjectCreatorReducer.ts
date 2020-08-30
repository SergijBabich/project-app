import {UsersApi} from '../api/api';

const SET_PROJECT_ID = 'SET-PROJECT-ID'; 
const SAVE_TITLE = 'SAVE_TITLE';
const SAVE_DESCRIPTION = 'SAVE_DESCRIPTION';
const initialState = {
  projectId: null,
  title:null
};

const   projectCreatorReducer = ( state = initialState, action: any) => {
  switch (action.type) {
  case SET_PROJECT_ID: 
    return {
      projectId: action.projectId,

    };
  case SAVE_TITLE: 
    return {
      title: action.title,

    }; 
  default:
    return state;
  }
};

const setProjectToken = (projectId) => {
  return {
    type: SET_PROJECT_ID,
    projectId  
  };  
};

const saveProjectTitleData = (title) => {
  return {
    type: SAVE_TITLE,
    title  
  };  
};

export const createUsersProject = (title, description, token) => {
  return  async (dispatch: dispatch) => {
    const data = await UsersApi.createNewProject(title, description, token);
    dispatch(setProjectToken(data.projectId));
  };  
};

export const saveProjectTitle = (title) => {
  return  async (dispatch: dispatch) => {
    dispatch(saveProjectTitleData(title));
  };  
};

export default projectCreatorReducer;
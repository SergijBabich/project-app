import {UsersApi} from '../api/api';

const SET_PROJECT_ID = 'SET-PROJECT-ID'; 
const initialState = {
  projectId: null,
};

const   projectCreatorReducer = ( state = initialState, action: any) => {
  switch (action.type) {
  case SET_PROJECT_ID: 
    return {
      projectId: action.projectId,

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

export const createUsersProject = (title, description, token) => {
  return  async (dispatch: dispatch) => {
    const data = await UsersApi.createNewProject(title, description, token);
    dispatch(setProjectToken(data.projectId));
  };  
};

export default projectCreatorReducer;
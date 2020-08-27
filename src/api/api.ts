import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://project23e.herokuapp.com/',
});

export const UsersApi = {
  login<T>(login: string, password: string): Promise<T> {
    return instance.get(`/get-users?login=${login}&password=${password}`, {
      login,
      password
    }).then(response  => { return response.data;}, (error) => {  return error; });
  },
  createNewProject(title:string, description:string, token:string):Response {
    return instance.post(`create-new-project/${token}`, {
      title, description,token
    }).then(response => {        
      return response.data;
    });
  },
  saveEditedProject(title: string, description: string, id: string, token: string):Response {
    return instance.put(`user-ptoject/${id}`, {
      title,
      description,
      token
    }).then(response => {      
      return response.data;
    });
  },
  getProjectsList(token: string):Response {
    return instance.get(`/user-ptojects?token=${token}`, {
      token
    }).then(response => {
      return response.data;
    });
  },
  deleteProject(id: string, token: string):Response {
    return instance.delete(`/delete-project/?id=${id}&token=${token}`).then(response => {
      return response.data;
    });
  }
};

import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';

/*let  bodyFormData = new FormData();
    bodyFormData.append("file", file);
    bodyFormData.set("api_token", 'e18f6001fd4236175f7dc468d0470702');
    bodyFormData.set("return", "timecode,apple_music,deezer,spotify");*/
const instance = axios.create({
  baseURL: 'https://project23e.herokuapp.com/',
});

export const UsersApi = {
    login<T>(login: any, password: any): Promise<T> {
        return instance.get(`/get-users?login=${login}&password=${password}`, {
            login,
            password
        }).then(response  => { return response.data}, (error) => {  return error; })
    },
    createNewProject(title:string, description:string, token:string) {
        return instance.post(`create-new-project/${token}`, {
            title, description,token
        }).then(response => {        
            return response.data;
        })
    },
    saveEditedProject(title: string, description: string, id: string, token: string) {
        return instance.put(`user-ptoject/${id}`, {
            title,
            description,
            token
        }).then(response => {      
            return response.data;
        })
    },
    getProjectsList(token: string) {
        return instance.get(`/user-ptojects?token=${token}`, {
            token
        }).then(response => {
            return response.data;
        })
    },
    deleteProject(id: string, token: string) {
        return instance.delete(`/delete-project/?id=${id}&token=${token}`).then(response => {
            return response.data;
        });
    }
}

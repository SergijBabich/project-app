import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';

/*let  bodyFormData = new FormData();
    bodyFormData.append("file", file);
    bodyFormData.set("api_token", 'e18f6001fd4236175f7dc468d0470702');
    bodyFormData.set("return", "timecode,apple_music,deezer,spotify");*/
const instance = axios.create({
  baseURL: 'http://localhost:3012/',
});

export const UsersApi = {
    login(login, password) {
        return instance.get(`/get-users?login=${login}&password=${password}`, {
            login,
            password
        }).then(response => {
            return response.data;
        })
    },
    createNewProject(title, description, token) {
        return instance.post(`create-new-project/${token}`, {
            title, description,token
        }).then(response => {        
            return response.data;
        })
    },
    getProjectsList(token) {
        return instance.get(`/user-ptojects?token=${token}`, {
            token
        }).then(response => {
            return response.data;
        })
    },
    saveEditedProject(title, description, token) {
        return instance.put(`user-ptoject/${token}`, {
            title,
            description
        }).then(response => {        
            return response.data;
        })
    },

}

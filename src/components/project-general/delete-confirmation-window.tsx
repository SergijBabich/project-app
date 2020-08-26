import React, {useEffect, useState } from "react";
import p from './project-general.module.css'
import { Redirect } from "react-router-dom"; 
import { Field, reduxForm, Form } from 'redux-form';
import {Input, Textarea} from '../../utils/form-control';
import {required, checkformat} from '../../utils/validators/validators';
import PropTypes from 'prop-types'; 

const DeleteConfirmationWindow = (props) => {
    const onDeleteProject = () => {
        props.deleteProject();
    }
    const onCancel = () => {
        props.cancelDelete();
    }
    return (
        <div className={p.modal}>
          <div className={p.modal__window}>
            <div className={p.window__title}>
                    <h3>Do you really wanna delete the project</h3>
                </div>
                <div className={p.window__button}>
                    <div className={p.window__button_action}>
                        <button className={p.button} onClick={onDeleteProject} type="button"  name="button">Delete </button> 
                    </div>
                    <div className={p.window__button_action}>
                        <button className={p.button} onClick={onCancel} type="button"  name="button">Cancel </button> 
                    </div>
                 </div>
           </div>
        </div>
    )
}

DeleteConfirmationWindow.propTypes = {
    cancelDelete: PropTypes.func,
    deleteProject: PropTypes.func
}


export default DeleteConfirmationWindow;
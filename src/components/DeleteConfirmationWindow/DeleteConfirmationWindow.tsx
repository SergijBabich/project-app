import React from 'react';
import PropTypes from 'prop-types';
import './DeleteWindowStyle.css';
import {DeleteProjectProps} from './DeleteConfirmationWindow-models';

const DeleteConfirmationWindow: React.FunctionComponent<DeleteProjectProps> = (props: DeleteProjectProps) => {
  const onDeleteProject = (): void => {
    props.deleteProject();
  };

  const onCancel = (): void => {
    props.cancelDelete();
  };

  return (
    <div className='modal'>
      <div className='modal__window'>
        <div className='window__title'>
          <h3>{props.t('project.askToCompfirm')}</h3>
        </div>
        <div className='window__button'>
          <div className='window__button_action'>
            <button className='button' onClick={onDeleteProject} type="button" name="button">{props.t('project.delete')}</button> 
          </div>
          <div className='window__button_action'>
            <button className='button' onClick={onCancel} type="button" name="button">{props.t('project.cancel')}</button> 
          </div>
        </div>
      </div>
    </div>
  );
};

DeleteConfirmationWindow.propTypes = {
  cancelDelete: PropTypes.func,
  deleteProject: PropTypes.func
};

export default DeleteConfirmationWindow;
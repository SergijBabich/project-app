import React from 'react'
import p from './project-general.module.css'
import PropTypes from 'prop-types'

interface Delete {
    cancelDelete: () => void ,
    deleteProject: () => void
}

const DeleteConfirmationWindow: React.FunctionComponent<Delete>= (props) => {
  const onDeleteProject = () => {
    props.deleteProject()
  }
  const onCancel = () => {
    props.cancelDelete()
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


export default DeleteConfirmationWindow
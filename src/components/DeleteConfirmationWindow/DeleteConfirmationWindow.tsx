import React from 'react'
import PropTypes from 'prop-types'
import './DeleteWindowStyle.css'
interface Delete {
    cancelDelete: () => void,
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
    <div className='modal'>
      <div className='modal__window'>
        <div className='window__title'>
          <h3>Do you really wanna delete the project</h3>
        </div>
        <div className='window__button'>
          <div className='window__button_action'>
            <button className='button' onClick={onDeleteProject} type="button"  name="button">Delete </button> 
          </div>
          <div className='window__button_action'>
            <button className='button' onClick={onCancel} type="button"  name="button">Cancel </button> 
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
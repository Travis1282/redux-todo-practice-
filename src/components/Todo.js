import React from 'react';
import PropTypes from 'prop-types';
import { toggleCompleted } from '../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


const Todo = ({ nameClick, completeClick, showDetails, completed, name, description }) => (
  <div>
    <div style={{
        color: completed ? 'grey' : 'black'
      }}>
      <FontAwesomeIcon 
        icon={ faCheckCircle } 
        onClick={ completeClick }        
      />
      <FontAwesomeIcon 
        icon={ faEdit } 
        onClick={ completeClick }
      />
      <h1
        onClick={ nameClick }
        style={{
          textDecoration: completed ? 'line-through' : 'none', 
        }}
      >
        { name }
      </h1>
      <div> 
        { showDetails ? description : null }
      </div>
    </div>

  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  showDetails: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Todo
import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleDetails, toggleCompleted }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        nameClick={() => toggleDetails(todo.id)}
        completeClick={() => toggleCompleted(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      showDetails: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired, 
      description: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  toggleDetails: PropTypes.func.isRequired
}

export default TodoList
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input
  let textarea

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          const text = [input.value, textarea.value]
          dispatch(addTodo(text))
          input.value = '';
          textarea.value = '';
        }}
      >
        <input ref={node => input = node} />
        <textarea ref={node => textarea = node} rows="4" cols="50" />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
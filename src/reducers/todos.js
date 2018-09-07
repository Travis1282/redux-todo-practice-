const todos = (state = [], action) => {
  console.log(state, action)
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          completed: false,
          showDetails: false
        }
      ]
    case 'TOGGLE_COMPLETED':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'TOGGLE_DETAILS':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, showDetails: !todo.showDetails}
          : todo
      )
    default:
      return state
  }
}

export default todos
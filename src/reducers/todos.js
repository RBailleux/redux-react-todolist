const todos = (state = [
    {id:0, label: "Learn Javascript", complete: true},
    {id:1, label: "Learn ES6", complete: true},
    {id:2, label: "Learn React", complete: false},
    {id:3, label: "Learn React Native", complete: false},
    {id:4, label: "Learn Nodejs", complete: false},
    {id:5, label: "Learn by doing", complete: false},
    {id:6, label: "Learn to teach", complete: false},
    {id:7, label: "Teach to learn", complete: false},
  ], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          label: action.text,
          complete: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, complete: !todo.complete}
          : todo
      )
    default:
      return state
  }
}

export default todos

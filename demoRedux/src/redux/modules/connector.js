
export const ADD_TO_TODO = 'ADD_TO_TODO'

export function addTodo (data) {
  return {
    type: ADD_TO_TODO,
    payload: data
  }
}

export const actions = {
  addTodo
}

const ACTION_HANDLERS = {
  [ADD_TO_TODO]:
    (state, action) => ({ ...state, todos: [...state.todos, action.payload] })
}

const initialState = {
  todos: []
}
export default function connectorReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

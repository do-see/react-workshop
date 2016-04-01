
export const ADD_TO_TODO = 'ADD_TO_TODO';
export const REMOVE_FROM_TODO = 'REMOVE_FROM_TODO';

export function addTodo (data) {
  return {
    type: ADD_TO_TODO,
    payload: data
  };
}

export function removeTodo (id) {
  return {
    type: REMOVE_FROM_TODO,
    id: id
  };
}

export const actions = {
  addTodo,
  removeTodo
};

const ACTION_HANDLERS = {
  [ADD_TO_TODO]:
    (state, action) => ({ ...state, todos: [...state.todos, action.payload] }),
  [REMOVE_FROM_TODO]:
    (state, action) => {
      const todos = state.todos;
      todos.splice(action.id, 1);
      return {...state, todos};
    }
};

const initialState = {
  todos: []
};
export default function todosReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

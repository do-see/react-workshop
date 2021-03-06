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
      return {...state, todos: [
        ...state.todos.slice(0, action.id),
        ...state.todos.slice(action.id + 1)
      ]};
    }
};

const initialState = {
  todos: []
};
export default function todosReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

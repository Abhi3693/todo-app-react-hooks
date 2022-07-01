import { createStore } from 'redux';

function todoReducer(
  state = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    searchValue: '',
  },
  action
) {
  switch (action.type) {
    case 'add':
      state.todos = state.todos.concat(action.payLoad);
      break;
    case 'delete':
      state.todos = state.todos.filter((elm) => elm.name !== action.payLoad);
      break;
    case 'deleteCompeleted':
      state.todos = action.payLoad;
      break;
    case 'toggle':
      state.todos = state.todos.map((elm) => {
        if (elm.name === action.payLoad) {
          elm.isDone = !elm.isDone;
        }
        return elm;
      });
      break;
    case 'search':
      state.searchValue = action.payLoad;
      break;
    default:
      break;
  }
  return { ...state };
}

let store = createStore(todoReducer);

export default store;

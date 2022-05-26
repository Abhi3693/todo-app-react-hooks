export function addTodo(todo) {
  return {
    type: 'add',
    payLoad: todo,
  };
}

export function deleteTodo(name) {
  return {
    type: 'delete',
    payLoad: name,
  };
}

export function handleIsDone(name) {
  return {
    type: 'toggle',
    payLoad: name,
  };
}

export function search(val) {
  return {
    type: 'search',
    payLoad: val,
  };
}

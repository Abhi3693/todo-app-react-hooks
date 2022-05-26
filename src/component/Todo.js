import React from 'react';
import { connect } from 'react-redux';

import { deleteTodo, handleIsDone } from '../store/action';

function Todo(props) {
  return (
    <li className='single-todo'>
      <input
        type='checkbox'
        className='todo-checkbox'
        checked={props.todo.isDone}
        onChange={() => props.dispatch(handleIsDone(props.todo.name))}
      />
      <span className='todo-text'>{props.todo.name}</span>
      <span
        className='delete-todo'
        onClick={() => props.dispatch(deleteTodo(props.todo.name))}
      >
        X
      </span>
    </li>
  );
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Todo);

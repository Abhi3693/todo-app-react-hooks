import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

function TodoList(props) {
  function handleList(list) {
    let val;
    if (props.activeTag === 'all') {
      val = list;
    } else if (props.activeTag === 'active') {
      val = list.filter((todo) => !todo.isDone);
    } else {
      val = list.filter((todo) => todo.isDone);
    }

    if (props.state.searchValue) {
      val = val.filter((elm) => {
        return elm.name.startsWith(props.state.searchValue);
      });
    }

    return val;
  }

  let finalList = handleList(props.state.todos);

  return (
    <ul className='todo-list'>
      {finalList.map((todo, i) => {
        return <Todo key={i} todo={todo} index={i} />;
      })}
    </ul>
  );
}

function mapStateToProps(state) {
  localStorage.setItem('todos', JSON.stringify(state.todos));
  return {
    state,
  };
}

export default connect(mapStateToProps)(TodoList);

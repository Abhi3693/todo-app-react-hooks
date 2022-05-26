import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    let list = this.props.state.todos;
    if (this.props.state.searchValue) {
      list = this.props.state.todos.filter((elm) => {
        return elm.name.startsWith(this.props.state.searchValue);
      });
    }
    return (
      <ul className='todo-list'>
        {list.map((todo, i) => {
          return <Todo key={i} todo={todo} index={i} />;
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  localStorage.setItem('todos', JSON.stringify(state.todos));
  return {
    state,
  };
}

export default connect(mapStateToProps)(TodoList);

import React from 'react';
import { connect } from 'react-redux';

import { addTodo, search } from '../store/action';
import TodoList from './TodoList';

class App extends React.Component {
  handleAddTodo = (event) => {
    let value = event.target.value;
    if (event.keyCode === 13 && value) {
      let todo = { name: value, isDone: false };
      this.props.dispatch(addTodo(todo));
      event.target.value = '';
    }
  };

  handleSearch = (event) => {
    let value = event.target.value;
    this.props.dispatch(search(value));
  };

  render() {
    return (
      <div className='container'>
        <div className='todo'>
          <h1 className='heading'>TODO App</h1>
          <input
            className='todo-input'
            type='text'
            placeholder='Add TODO'
            onKeyUp={this.handleAddTodo}
          />
          <input
            className='search-todo todo-search'
            onKeyUp={this.handleSearch}
            type='text'
            placeholder='Search TODO'
          />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default connect()(App);

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTodo, search, deleteCompeleted } from '../store/action';
import TodoList from './TodoList';

function App(props) {
  let [activeTag, setTag] = useState('all');
  let [inputVal, setInput] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (inputVal) {
      let todo = { name: inputVal, isDone: false };
      props.dispatch(addTodo(todo));
      setInput('');
    }
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = (event) => {
    let value = event.target.value;
    props.dispatch(search(value));
  };

  const handleActiveTag = (val) => {
    setTag(val);
  };

  const handleCompletedDelete = () => {
    let list = props.state.todos.filter((todo) => !todo.isDone);
    setTag('all');
    props.dispatch(deleteCompeleted(list));
  };

  return (
    <div className='container'>
      <div className='todo'>
        <div>
          <h1 className='heading'>TODO App</h1>
          <form className='input-form' onSubmit={handleAddTodo}>
            <input
              className='todo-input'
              type='text'
              placeholder='Add TODO'
              value={inputVal}
              onChange={handleInput}
            />
            <input type='submit' value='Submit' className='submit' />
          </form>
          <input
            className='search-todo todo-search'
            onKeyUp={handleSearch}
            type='text'
            placeholder='Search TODO'
          />
        </div>
        <div className='tag-holder'>
          <button
            className={activeTag === 'all' ? 'tag active' : 'tag'}
            onClick={() => handleActiveTag('all')}
          >
            All
          </button>
          <button
            className={activeTag === 'active' ? 'tag active' : 'tag'}
            onClick={() => handleActiveTag('active')}
          >
            Active
          </button>
          <button
            className={activeTag === 'compeleted' ? 'tag active' : 'tag'}
            onClick={() => handleActiveTag('compeleted')}
          >
            Compeleted
          </button>
          <button className='tag' onClick={handleCompletedDelete}>
            Delete Compeleted
          </button>
        </div>
        <TodoList activeTag={activeTag} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  localStorage.setItem('todos', JSON.stringify(state.todos));
  return {
    state,
  };
}

export default connect(mapStateToProps)(App);

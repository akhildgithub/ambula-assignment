import React from 'react';
import { TodoProvider } from '../context/TodoContext';
import TodoList from '../components/TodoList';
import '../../Todo.css'

function TodoApp() {
  return (
    <TodoProvider>
      <div className='TodoWrapper'>
        <h1 className='heading'>Todo List</h1>
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default TodoApp;

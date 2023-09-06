import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import TodoItem from '../components/TodoItem';

function TodoList() {
  const { state, dispatch } = useTodo();
  const { tasks } = state;
  const [newTask, setNewTask] = useState('');

  const addTask = (text) => {
    // Generate a unique ID for the task
    if(text===''){
      return alert('Task cannot be empty')
    }
    const id = Date.now();
    const task = { id, text, completed: false };
    dispatch({ type: 'ADD_TASK', payload: task });
    setNewTask('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        className='textInput'
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={() => addTask(newTask)} className='addButton'>Add</button>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
    </div>
  );
}

export default TodoList;

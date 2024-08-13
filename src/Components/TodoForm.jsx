import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        className="todo-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button type="submit" className="todo-button">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;


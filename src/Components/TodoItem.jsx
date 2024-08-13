import React from 'react';

function TodoItem({ todo, completeTodo, removeTodo }) {
  return (
    <li className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      <div onClick={() => completeTodo(todo.id)} className="todo-text">
        {todo.text}
      </div>
      <div className="todo-actions">
        <button onClick={() => removeTodo(todo.id)} className="todo-delete">
          &times;
        </button>
      </div>
    </li>
  );
}

export default TodoItem;


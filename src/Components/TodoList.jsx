import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, completeTodo, removeTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;


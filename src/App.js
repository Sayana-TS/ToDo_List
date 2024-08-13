import React, { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import Header from './Components/Header';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const incompleteTasksCount = todos.filter((todo) => !todo.isCompleted).length;

  return (
    <div className="app">
      <Header/>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
      <div className="task-counter">
        {incompleteTasksCount} task{incompleteTasksCount !== 1 ? 's' : ''} left
      </div>
    </div>
  );
}

export default App;


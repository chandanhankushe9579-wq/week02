// src/App.js
import React from 'react';
import TodoApp from './components/TodoApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>📝 My Todo List</h1>
      <TodoApp />
    </div>
  );
}

export default App;
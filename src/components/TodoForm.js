// src/components/TodoForm.js
import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [inputText, setInputText] = useState('');
  
  // ✅ Add this to check if prop is received
  console.log('TodoForm received addTask:', addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit clicked, input:', inputText);
    
    if (inputText.trim() && addTask) {
      addTask(inputText);
      setInputText('');
    } else {
      console.log('addTask is:', addTask); // Check if this is undefined
      alert('Please enter a task!');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
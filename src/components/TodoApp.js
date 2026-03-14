// src/components/TodoApp.js
import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import './TodoApp.css';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // ✅ FIXED addTask function
  const addTask = (text) => {
    console.log('1. Adding task:', text);
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };
    
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, newTask];
      console.log('2. Updated tasks:', updatedTasks);
      return updatedTasks;
    });
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  const getFilteredTasks = () => {
    switch(filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div className="todo-app">
      <h2>Tasks</h2>
      {/* ✅ Make sure addTask is passed here */}
      <TodoForm addTask={addTask} />
      
      <FilterButtons currentFilter={filter} setFilter={setFilter} />
      
      <TodoList 
        tasks={getFilteredTasks()}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
      
      <div className="task-counter">
        Total tasks: {tasks.length} | 
        Completed: {tasks.filter(t => t.completed).length} | 
        Pending: {tasks.filter(t => !t.completed).length}
      </div>
    </div>
  );
}

export default TodoApp;
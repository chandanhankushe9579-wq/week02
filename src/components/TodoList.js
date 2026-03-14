// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleComplete, deleteTask, editTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>📭 No tasks to display</p>
        <p>Add a new task to get started!</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <TodoItem 
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
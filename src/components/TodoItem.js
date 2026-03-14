// src/components/TodoItem.js
import React, { useState } from 'react';

function TodoItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="todo-content">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleEdit} className="save-btn">Save</button>
        </div>
      ) : (
        <>
          <div className="todo-content">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <span className="todo-text">{task.text}</span>
          </div>
          <div className="todo-actions">
            <button 
              onClick={() => toggleComplete(task.id)}
              className="complete-btn"
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button 
              onClick={handleEdit}
              className="edit-btn"
            >
              Edit
            </button>
            <button 
              onClick={() => deleteTask(task.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
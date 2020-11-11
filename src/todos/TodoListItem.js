import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <div className="todo-item-container">
        <div className="completed-item">   
            <input type="checkbox" name="completed" id="completed" 
             checked={todo.isCompleted === true ? true : false}
             onChange={() => {onCompletedPressed(todo.text, !todo.isCompleted)}}/> 
        </div>
        <div className={todo.isCompleted ? "completed-list-item": "list-item"}>
            <h3>{todo.text}</h3>
        </div>
        <div className="remove-button">
            <button 
                onClick={() => onRemovePressed(todo.text)}
                >x</button>
        </div>
    </div>
);

export default TodoListItem;
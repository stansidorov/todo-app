import React from 'react';
import './TodoHeader.css';

const TodoHeader = ({ isHiding, onHideAllCompleted }) => {
    return (
        <div className="todo-header">
            <div>
                <h2>Todo List (1)</h2>
            </div>
            <div>
                <input type="checkbox" name="hide-all-completed" id="hide-all-completed"
                 checked={isHiding === true ? true : false}
                 onChange={() => {onHideAllCompleted(!isHiding)}}/> 
                <label htmlFor="hide-all-completed">Hide Completed Tasks</label>
            </div>
        </div>
    );
};

export default TodoHeader;

import React, { useState } from 'react';
import './TodoHeader.css';

const TodoHeader = () => {
    // const [inputValue, setInputValue] = useState('');

    return (
        <div className="todo-header">
            <div>
                <h2>Todo List (1)</h2>
            </div>
            <div>
                <input type="checkbox" name="completed" id="completed"/> 
                <label for="completed">Hide Completed Tasks</label>
            </div>
        </div>
    );
};

export default TodoHeader;
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './selectors';
import { createTodo } from './actions';
import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreateEntered }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type to add new tasks"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        const isDuplicateText =
                        todos.some(todo => todo.text === inputValue);
                        const isEmpty = inputValue.length === 0;
                        if (!isDuplicateText && !isEmpty) {
                            onCreateEntered(inputValue);
                            setInputValue('');
                        }
                    }
                }}
                />
        </div>
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
    onCreateEntered: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
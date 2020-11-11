import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {
    getTodos,
    getTodosHidingFlag,
    getAllTodos,
    getIncompleteTodos,
} from './selectors';
import TodoHeader from './TodoHeader';
import { 
    createTodo,
    removeTodo, 
    markTodoAsCompleted,
    hideAllCompleted,
} from './actions';
import './TodoList.css';

const TodoList = ({isHiding, 
                   todos, 
                   allTodos, 
                   incompletedTodos, 
                   onCreateEntered, 
                   onRemovePressed, 
                   onCompletedPressed,
                   onHideAllCompleted }) => (
    <div className="app-wrapper">
        <TodoHeader 
            isHiding={isHiding}
            onHideAllCompleted={onHideAllCompleted}/>
        <NewTodoForm 
            todos={todos}
            onCreateEntered={onCreateEntered}/>
        {(isHiding ? incompletedTodos : allTodos).map((todo, i) => <TodoListItem
            key={i}
            todo={todo} 
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}/>)}
    </div>
);

const mapStateToProps = state => ({
    todos: getTodos(state),
    isHiding: getTodosHidingFlag(state),
    allTodos: getAllTodos(state),
    incompletedTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    onCreateEntered: text => dispatch(createTodo(text)),
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: (text, completedFlag) => dispatch(markTodoAsCompleted(text, completedFlag)),
    onHideAllCompleted: (hidingFlag) => dispatch(hideAllCompleted(hidingFlag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
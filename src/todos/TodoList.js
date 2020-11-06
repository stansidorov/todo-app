import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {
    getTodosHidingFlag,
    getAllTodos,
    getIncompleteTodos,
} from './selectors';
import TodoHeader from './TodoHeader';
import { 
    removeTodo, 
    markTodoAsCompleted, 
} from './actions';
import './TodoList.css';

const TodoList = ({isHiding, allTodos, incompletedTodos, onRemovePressed, onCompletedPressed }) => (
    <div className="app-wrapper">
        <TodoHeader />
        <NewTodoForm />
        {(isHiding ? incompletedTodos : allTodos).map(todo => <TodoListItem 
            todo={todo} 
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}/>)}
    </div>
);

const mapStateToProps = state => ({
    isHiding: getTodosHidingFlag(state),
    allTodos: getAllTodos(state),
    incompletedTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: (text, completedFlag) => dispatch(markTodoAsCompleted(text, completedFlag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
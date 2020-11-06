import { createSelector } from 'reselect';

export const getTodos = state => state.todos.data;
export const getTodosHidingFlag = state => state.todos.isHided

export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => !todo.isCompleted),
);

export const getAllTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo),
);

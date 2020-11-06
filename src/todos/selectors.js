import { createSelector } from 'reselect';

export const getTodos = state => state.todos.data;
export const getTodosHideFlag = state => state.todos.isHiding

export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => !todo.isCompleted),
);

export const getAllTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo),
);

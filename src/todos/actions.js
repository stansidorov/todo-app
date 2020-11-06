export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
});

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const markTodoAsCompleted = (text, completedFlag) => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { text, completedFlag },
});

export const HIDE_ALL_COMPLETED = 'HIDE_ALL_COMPLETED';
export const hideAllCompleted = isHiding => ({
    type: HIDE_ALL_COMPLETED,
    payload: { isHiding },
});
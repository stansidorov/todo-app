
import { 
    CREATE_TODO, 
    REMOVE_TODO,
    MARK_TODO_AS_COMPLETED,
    HIDE_ALL_COMPLETED
} from './actions';

const initialState = { hidingFlag: false, data: [] };

export const todos = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const { text } = payload;
        const newTodo = {
            text,
            isCompleted: false,
        };
        return {
            ...state,
            data: state.data.concat(newTodo),
        };
    }
    case REMOVE_TODO: {
        const { text } = payload;
        return {
            ...state,
            data: state.data.filter(todo => todo.text !== text),
        };
    }
    case MARK_TODO_AS_COMPLETED: {
        const { text, completedFlag } = payload;
        return {
            ...state,
            data: state.data.map(todo => {
            if (todo.text === text) {
                return { ...todo, isCompleted: completedFlag };
            }
            return todo;
            }),
        };
    }
    case HIDE_ALL_COMPLETED:
        const { hidingFlag } = payload;
        const res = {
            ...state,
            isHided: hidingFlag,
        }
        console.log(res);
        return res;

    default:
        return state;
    }
}
import { expect } from 'chai';
import { todos } from '../reducers';

describe('The todos reducer', () => {
    it('Adds a new todo when CREATE_TODO action is received', () => {
        const originalState = { isHided: false, data: [] };

        const fakeTodo = { text: 'hello' };

        const fakeAction = {
            type: 'CREATE_TODO',
            payload: fakeTodo,
        };

        const expected = {
            isHided: false,
            data: [{...fakeTodo, isCompleted: false}],
        };

        const actual = todos(originalState, fakeAction);

        expect(actual).to.deep.equal(expected);
    });
});

describe('The todos reducer', () => {
    it('Removes when REMOVE_TODO action is received', () => {
        
        const fakeTodo1 = { text: 'hello',  isCompleted: false };
        const fakeTodo2 = { text: 'hi',  isCompleted: false };

        const originalState = { isHided: false, data: [fakeTodo1, fakeTodo2] };

        const fakeAction = {
            type: 'REMOVE_TODO',
            payload: { text: fakeTodo1.text},
        };

        const expected = {
            isHided: false,
            data: [fakeTodo2],
        };

        const actual = todos(originalState, fakeAction);

        expect(actual).to.deep.equal(expected);
    });
});

describe('The todos reducer', () => {
    it('Marks as completed MARK_TODO_AS_COMPLETED action is received', () => {

        const fakeTodo = { text: 'hello',  isCompleted: false };

        const originalState = { isHided: false, data: [fakeTodo] };

        const fakeAction = {
            type: 'MARK_TODO_AS_COMPLETED',
            payload: { text: fakeTodo.text, completedFlag: true},
        };

        const expected = {
            isHided: false,
            data: [{text: fakeTodo.text, isCompleted: true},
            ],
        };

        const actual = todos(originalState, fakeAction);

        expect(actual).to.deep.equal(expected);
    });
});

describe('The todos reducer', () => {
    it('Reverts completeness when MARK_TODO_AS_COMPLETED action is received', () => {

        const fakeTodo = { text: 'hello',  isCompleted: true };

        const originalState = { isHided: false, data: [fakeTodo] };

        const fakeAction = {
            type: 'MARK_TODO_AS_COMPLETED',
            payload: { text: fakeTodo.text, completedFlag: false},
        };

        const expected = {
            isHided: false,
            data: [{text: fakeTodo.text, isCompleted: false},
            ],
        };

        const actual = todos(originalState, fakeAction);

        expect(actual).to.deep.equal(expected);
    });
});

describe('The todos reducer', () => {
    it('Hides all completed tasks when HIDE_ALL_COMPLETED action is received', () => {

        const fakeTodo = { text: 'hello',  isCompleted: true };

        const originalState = { 
            isHided: false,
             data: [fakeTodo],
            };

        const fakeAction = {
            type: 'HIDE_ALL_COMPLETED',
            payload: {hidingFlag : true}
        };

        const expected = {
            isHided: true,
            data: [fakeTodo],
        };

        const actual = todos(originalState, fakeAction);

        expect(actual).to.deep.equal(expected);
    });
});
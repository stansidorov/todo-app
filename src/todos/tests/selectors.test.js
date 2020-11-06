import { expect } from 'chai';
import { getAllTodos, getIncompleteTodos } from '../selectors';

describe('The getAlltodos selector', () => {
    it('Returns all dotos regardless of isCompleted flag', () => {
        const fakeTodos = [{
            text: 'Say Hello',
            isCompleted: true,
        }, {
            text: 'Say Goodbye',
            isCompleted: false,
        }, {
            text: 'Read a book',
            isCompleted: false,
        }];

        const actual = getAllTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(fakeTodos);
    });
});

describe('The getAlltodos selector', () => {
    it('Returns only incompleted dotos', () => {
        const fakeTodos = [{
            text: 'Say Hello',
            isCompleted: true,
        }, {
            text: 'Say Goodbye',
            isCompleted: true,
        }, {
            text: 'Read a book',
            isCompleted: false,
        }];

        const expected = [{
            text: 'Read a book',
            isCompleted: false,
        }];

        const actual = getIncompleteTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    });
});
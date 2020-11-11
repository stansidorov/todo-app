import React from 'react';
import { connect } from 'react-redux';
import { getTodosHidingFlag } from "./selectors";
import { hideAllCompleted } from './actions';
import './TodoHeader.css';

const TodoHeader = ({ isHiding, onHideAllCompleted }) => {
    return (
        <div className="todo-header">
            <div>
                <h2>Todo List (1)</h2>
            </div>
            <div>
                <input type="checkbox" name="hide-all-completed" id="hide-all-completed"
                 checked={(typeof isHiding === 'undefined' || isHiding === false) ? null : 'checked'}
                 onChange={() => {onHideAllCompleted(!isHiding)}}/> 
                <label htmlFor="hide-all-completed">Hide Completed Tasks</label>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isHiding: getTodosHidingFlag(state),
});

const mapDispatchToProps = dispatch => ({
    onHideAllCompleted: (hidingFlag) => dispatch(hideAllCompleted(hidingFlag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader);

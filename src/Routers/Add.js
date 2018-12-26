import React from 'react';
import AddExpense from '../components/addExpense';
import { connect } from 'react-redux';
import { addEx } from '../Redux/Actions/Expenses';

const CreatExpense = (props) => (
    <div>
        <h1>add section</h1>
        <AddExpense
            submitted={(expense) => {
                console.log(expense);
                props.dispatch(addEx(expense));
                props.history.push('/');
            }}
        />
    </div>
);

const mapStateToProp = (state, props) => {
    console.log(state, props);
    
}

export default connect(mapStateToProp)(CreatExpense);

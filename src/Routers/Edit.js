import React from 'react';
import EditExpense from '../components/addExpense';
import { connect } from 'react-redux';
import { editEx } from '../Redux/Actions/Expenses';

const Edit = (props) => {
    return (
        <div>
            <h1>Edit Section</h1>
            <EditExpense
                expense={props.expenses} 
                submitted={(expenseReturn) => {
                    console.log(expenseReturn.id, expenseReturn);
                    props.dispatch(editEx(expenseReturn.id, expenseReturn));
                    props.history.push('/'); 
                }} 
            />
        </div>
    )
};

const mapStateToProps = (state, props) => {
    console.log(state, props);
    const editingItem = state.expenses.find((item) => {
        if( item.id === props.match.params.id ) {
            return true
        }
    })  
    return {
        expenses: editingItem
    }
};

export default connect(mapStateToProps)(Edit); 


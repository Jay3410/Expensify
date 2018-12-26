import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class AddExpense extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    state={
        desc: this.props.expense.desc ? this.props.expense.desc : '',
        amount: this.props.expense.amount ? this.props.expense.amount : '',
        createdAt: this.props.expense.createdAt ? moment(this.props.expense.createdAt) : moment(),
        note: this.props.expense.note ? this.props.expense.note : '',
        focused: false,
        error: ''
    }
    onDescChange = (e) => {
        const desc = e.target.value;
        this.setState(() => ({ desc }))
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if( amount.match(/^\d{1,}(\.\d{0,2})?$/) ) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (e) => {
        const createdAt = moment(e);
        if(createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ focused }))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.desc || !this.state.amount) {
            this.setState(() => ({ error: 'Please fill description and amount'}))
        } else {
            this.setState(() => ({ error: ''}))
            this.props.submitted({
                id: this.props.expense.id,
                desc: this.state.desc,
                amount: this.state.amount,
                createdAt: moment().valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        value={this.state.desc}
                        onChange={this.onDescChange}
                        placeholder='Description'
                        autoFocus
                    />
                    <input
                        type='text'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        placeholder='Amount'
                    />
                    <input
                        type='text'
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        placeholder='Note (Optional)'
                    />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange} 
                        focused={this.state.focused}
                        onFocusChange={this.onFocusChange} 
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <button>
                        Create Expense
                    </button>
                </form>
                

            </div>
        )
    }
}
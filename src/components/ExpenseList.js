import React from 'react';
import { connect } from 'react-redux';
import selestiveActions from '../Redux/SelectiveActions';
import ExpenseListItem from './expenseListItems';
import { sortType, sortDate, pickStartDate, pickEndDate } from '../Redux/Actions/Filter';

import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseList extends React.Component {
    state = {
        focusedInput: false
    };    
    onSortChange = (e) => {
        const sortValue = e.target.value;
        this.props.dispatch(sortDate({sortBy: sortValue}))
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(pickStartDate({start: startDate}));
        this.props.dispatch(pickEndDate({end: endDate}));
    }
    onFocuseChange = (a) => {
        const focused = a
        this.setState(() => {
            return {
                focusedInput: focused
            }
        })
    }

    render() {
        console.log(this.props.filter, this.props.expenses)
        return (
            <div>
                <input type='text' value={this.props.filter.text} onChange={(e) => {
                    this.props.dispatch(sortType({text: e.target.value}))
                }} />
                <select
                    value={this.props.filter.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate={moment(this.props.filter.startDate)}
                    startDateId="startDate"
                    endDate={moment(this.props.filter.endDate)}
                    startDateId='endDate'
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={this.onFocuseChange}
                    isOutsideRange={() => false}
                />
                {this.props.expenses.map((item) => {
                    return <ExpenseListItem key={item.id} {...item} dispatchProp={this.props.dispatch} />
                })}
            </div>
        );
    }
}

const mapSateToProps = (state) => {
    return {
        expenses: selestiveActions(state.expenses, state.filter),
        filter: state.filter
    }
};


export default connect(mapSateToProps)(ExpenseList);
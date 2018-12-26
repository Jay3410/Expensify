import React from 'react';
import { removeEx } from '../Redux/Actions/Expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
    <div>
        <Link to={`/${props.id}`}><h3>{props.desc}</h3></Link>
        <p>amount - {props.amount} - createdAT - {props.createdAt}</p>
        <button onClick={() => {
            props.dispatchProp(removeEx(props.id))
        }}>Remove</button>
    </div>
);

export default ExpenseListItem;


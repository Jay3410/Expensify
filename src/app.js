import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './Routers/MainRouter';
import { Provider } from 'react-redux';

import { addEx, editEx, removeEx } from './Redux/Actions/Expenses';
import { sortType, sortDate, startDate, endDate } from './Redux/Actions/Filter';
import store from './Redux/combineReducer';
import selectiveActions from './Redux/SelectiveActions';



store.dispatch(addEx({ desc: 'water bill', amount: 235}));

store.dispatch(addEx({ desc: 'electric', amount: 5}));

store.dispatch(addEx({ desc: 'gas bill', amount: 285 , createdAt: 100}));

console.log(store.getState());

const toreNew = store.getState();



const jsx = (
    <Provider store={store}>
        <MainRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


import { createStore, combineReducers } from 'redux';
import expensesReducer from './Reducers/Expenses';
import filterReducer from './Reducers/Filter';

export default createStore(combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


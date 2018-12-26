import moment from 'moment';

let filterReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month').valueOf(),
    endDate: moment().endOf('month').valueOf()
};

export default (state = filterReducerDefault, action) => {
    switch (action.type) {
        case 'SORT_TYPE':
            return { ...state, text: action.text}
        case 'SORT_DATE':
            console.log(action.sortBy);
            return { ...state, sortBy: action.sortBy}
        case 'START_DATE':
            console.log(action.start);
            return { ...state, startDate: action.start}
        case 'END_DATE':
        console.log(action.end)
            return { ...state, endDate: action.end}
        default:
            return state
    }
};

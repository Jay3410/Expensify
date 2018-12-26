import uuid from 'uuid';
import moment from 'moment';

export const addEx = ({
    desc = '',
    note = '',
    amount = 0,
    createdAt = moment().valueOf()
} = {}) => ({
    type: 'ADD_EX',
    expense: {
        id: uuid(),
        desc,
        note,
        amount,
        createdAt
    }
});

export const editEx = (changeItemID, change) => {
    return {
        type: 'EDIT_EX',
        changeItem: changeItemID,
        change: change
    }
};

export const removeEx = (item) => ({
    type: 'REMOVE_EX',
    changeItem: item
});


import moment from 'moment';

export const sortType = ({text}) => ({
    type: "SORT_TYPE",
    text
});

export const sortDate = ({sortBy}) => ({
    type: "SORT_DATE",
    sortBy
});

export const pickStartDate = ({start}) => ({
    type: "START_DATE",
    start: moment(start).valueOf()
});

export const pickEndDate = ({end}) => ({
    type: "END_DATE",
    end: moment(end).valueOf()
});

const selectiveActions = (expense, {
    text,
    sortBy,
    startDate,
    endDate
}) => {
    console.log(startDate, endDate)
    return expense.filter((item) => {
        const startMatch = startDate && startDate <= item.createdAt;
        const endMatch = endDate && endDate >= item.createdAt;
        const typeMatch = item.desc.toLowerCase().includes(text.toLowerCase());
        console.log(startMatch, endMatch, typeMatch);
        return startMatch && endMatch && typeMatch;
    }).sort((a, b) => {
        if ( sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if ( sortBy === 'amount' ) {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

export default selectiveActions;
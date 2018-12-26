let expensesReducerDefault = [];

export default (state = expensesReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_EX':
            return [...state, action.expense ]
        case 'EDIT_EX':
            let change1 = {}
                change1 =  state.map((item) => {
                if (item.id === action.changeItem) {
                    return {...item, ...action.change}
                } else {
                    return item
                }
            })
            return change1
        case 'REMOVE_EX':
            return state.filter((item) => {
                return (item.id !== action.changeItem)
            })
        default:
            return state
    }
};

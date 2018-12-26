import { addEx, removeEx, editEx } from '../../../Redux/Actions/Expenses';
import expenses from '../../Fixtures/expenses'; 

test('edit', () => {
    const change = { desc: 'changed Desc'}
    const result = editEx(expenses[1].id, change);
    expect(result).toEqual({
        type: 'EDIT_EX',
        changeItem: expenses[1].id,
        change: { desc: 'changed Desc'}
    })
})

test('remove', () => {
    const result = removeEx(expenses[1].id);
    expect(result).toEqual({
        type: 'REMOVE_EX',
        changeItem: expenses[1].id
    })
})

test('add with NO obj',() => {
    const result = addEx();
    expect(result).toEqual({
        type: 'ADD_EX',
        expense: {
            id: expect.any(String),
            desc: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})

test('add with obj',() => {
    const result = addEx({
            desc: 'desc1',
            note: 'note1',
            amount: 123,
            createdAt: 1
        }
    );
    expect(result).toEqual({
        type: 'ADD_EX',
        expense: {
            id: expect.any(String),
            desc: 'desc1',
            note: 'note1',
            amount: 123,
            createdAt: 1
        }
    })
})
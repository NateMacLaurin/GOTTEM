import usersListReducer from './users.list.reducer.js';

describe('testing user reducer', () => {
    //SET USER
    test('ACTION SET_USERS_LIST', () => {
            const initialState = {};
            const action = {type: 'SET_USERS_LIST', payload: {username: 'asfd'}};
    
            expect(usersListReducer(initialState, action)).toEqual({username: 'asfd'});
    });
    //UNSET USER
    test('ACTION UNSET_USERS_LIST', () => {
        const initialState = {username: 'asdfsd'};
        const action = {type: 'UNSET_USERS_LIST'};

        expect(usersListReducer(initialState, action)).toEqual([]);
    });
    //OTHER ACTION
    test('ACTION OTHER', () => {
        const initialState = {username: 'asdfsd'};
        const action = {type: 'OTHER_ACTION'};

        expect(usersListReducer(initialState, action)).toEqual(initialState);        
    });
});
import userReducer from './user.reducer.js';

describe('testing user reducer', () => {
    //SET USER
    test('ACTION SET_USER', () => {
            const initialState = {};
            const action = {type: 'SET_USER', payload: {username: 'asfd'}};
    
            expect(userReducer(initialState, action)).toEqual({username: 'asfd'});
    });
    //UNSET USER
    test('ACTION UNSET_USER', () => {
        const initialState = {username: 'asdfsd'};
        const action = {type: 'UNSET_USER'};

        expect(userReducer(initialState, action)).toEqual({});
    });
    //OTHER ACTION
    test('ACTION OTHER', () => {
        const initialState = {username: 'asdfsd'};
        const action = {type: 'OTHER_ACTION'};

        expect(userReducer(initialState, action)).toEqual(initialState);        
    });
});
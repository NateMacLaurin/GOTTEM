const usersListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_USERS_LIST':
        return action.payload;
      case 'UNSET_USERS_LIST':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default usersListReducer;
  
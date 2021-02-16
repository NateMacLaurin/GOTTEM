const searchedAssetsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SEARCHED_ASSETS':
        return action.payload;
      case 'UNSET_SEARCHED_ASSETS':
        return [];
      default:
        return state;
    }
  };

export default searchedAssetsReducer;
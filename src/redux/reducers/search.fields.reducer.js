const searchFieldsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SEARCH_FIELDS':
        return action.payload;
      case 'UNSET_SEARCH_FIELDS':
        return [];
      default:
        return state;
    }
  };

export default searchFieldsReducer;
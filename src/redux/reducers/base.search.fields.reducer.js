const baseSearchFieldsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SEARCH_FIELDS_BASE':
        return action.payload;
      case 'UNSET_SEARCH_FIELDS_BASE':
        return [];
      default:
        return state;
    }
  };

export default baseSearchFieldsReducer;
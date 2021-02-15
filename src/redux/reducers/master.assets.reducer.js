const masterAssetsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MASTER_ASSETS':
        return action.payload;
      case 'UNSET_MASTER_ASSETS':
        return [];
      default:
        return state;
    }
  };

export default masterAssetsReducer;
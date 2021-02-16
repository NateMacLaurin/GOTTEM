const masterAssetItemReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MASTER_ASSET_ITEM':
        return action.payload;
      case 'UNSET_MASTER_ASSET_ITEM':
        return [];
      default:
        return state;
    }
  };

export default masterAssetItemReducer;
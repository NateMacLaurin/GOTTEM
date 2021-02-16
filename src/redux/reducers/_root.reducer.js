import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import masterAssets from './master.assets.reducer';
import masterAssetItem from './master.asset.item.reducer';
import searchFields from './search.fields.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  masterAssets, // holds the master asset inventory list with all DB fields joined
  masterAssetItem, //holds one item from the master inventory list with all DB fields joined
  searchFields, //holds search fields to populate dropdown selectors
});

export default rootReducer;

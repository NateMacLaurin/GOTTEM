import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* fetchUserToggle(action) {
  console.log(`In fetchUserToggle: ${action.payload}`);
    try {
      //get all users from server
    const response = yield axios.post('/api/user/toggle', {id: action.payload});
      //log the response
    console.log(`Response from user toggle POST: ${response.data}`);
      //fetch updated users
    yield put({ type: 'FETCH_ALL_USERS' });
  } catch(error){
      //log error
    console.log('Get all users GET request failed', error);
  }
}

function* fetchAllUsers() {
    console.log(`In fetchAllUsers Saga`);
  try {
      //get all users from server
    const response = yield axios.get('/api/user/users');
      //log the response
    console.log(`Response from users GET: ${response.data}`);
      //send all users to reducer
    yield put({ type: 'SET_USERS_LIST', payload: response.data });
  } catch(error){
      //log error
    console.log('Get all users GET request failed', error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('FETCH_ALL_USERS', fetchAllUsers);
  yield takeLatest('USER_TOGGLE_ADMIN', fetchUserToggle);
}

export default userSaga;

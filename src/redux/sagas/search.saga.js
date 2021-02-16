import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getSearchFields() {
    //debug log
    console.log(`In getSearchFields Saga`);
    try{
        const searchFields = yield axios.get('/api/master/search');
            //debug console log reponse data
        console.log('get search fields:', searchFields.data);
            //pass to reducer
        yield put({type: 'SET_SEARCH_FIELDS', payload: searchFields.data});
    }catch(err){
        console.log('Error fetching search fields:', error);
    }
}

function* searchSaga() {
    yield takeLatest('GET_SEARCH_FIELDS', getSearchFields);
}

export default searchSaga;
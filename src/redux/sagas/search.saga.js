import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getSearchFieldsBase() {
    //debug log
    console.log(`In getSearchFieldsBase Saga`);
    try{
        const searchFields = yield axios.get('/api/master/search/');
            //debug console log reponse data
        console.log('get base search fields:', searchFields.data);
            //pass to reducer
        yield put({type: 'SET_SEARCH_FIELDS_BASE', payload: searchFields.data});
    }catch(err){
        console.log('Error fetching base search fields:', error);
    }
}

function* searchSaga() {
    yield takeLatest('GET_SEARCH_FIELDS_BASE', getSearchFieldsBase);
}

export default searchSaga;
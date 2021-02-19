import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getSearchQuery(action) {
    //debug log
    console.log(`In getSearchQuery Saga ${action.payload.searchCategory} ${action.payload.searchString}`);
    try{
        const searchResultList = yield axios.get(`/api/master/search/query/${action.payload.searchCategory}/${action.payload.searchString}`);
            //debug console log reponse data
        console.log('search results:', searchResultList.data);
            //pass to reducer
        yield put({type: 'SET_MASTER_ASSETS', payload: searchResultList.data});
    }catch(err){
        console.log('Error fetching search results:', error);
    }
}

function* assetSearchedSaga() {
    yield takeLatest('GET_INVENTORY_SEARCH_QUERY', getSearchQuery);
}

export default assetSearchedSaga;
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAllAssets() {
    //debug log
    console.log(`In getAllAssets Saga`);
    try{
        const masterAssetList = yield axios.get('/api/master');
        console.log('get all assets:', masterAssetList.data);
        yield put({type: 'SET_MASTER_ASSETS', payload: masterAssetList.data});
    }catch(err){
        console.log('Error fetching master asset list:', error);
    }
}

function* assetMasterSaga() {
    yield takeLatest('FETCH_MASTER_ASSETS', getAllAssets);
}

export default assetMasterSaga;
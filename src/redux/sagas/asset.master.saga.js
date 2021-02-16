import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAllAssets() {
    //debug log
    console.log(`In getAllAssets Saga`);
    try{
        const masterAssetList = yield axios.get('/api/master');
            //debug console log reponse data
        console.log('get all assets:', masterAssetList.data);
            //pass to reducer
        yield put({type: 'SET_MASTER_ASSETS', payload: masterAssetList.data});
    }catch(err){
        console.log('Error fetching master asset list:', error);
    }
}

function* getSingleAsset(action){
    //debug log
    console.log(`In getSingleAsset Saga at:`, action.payload);
    try{
        const masterAssetItem = yield axios.get(`/api/master/item/${action.payload}`);
            //debug console log reponse data
        console.log('get one asset:', masterAssetItem.data);
            //pass to reducer
        yield put({type: 'SET_MASTER_ASSET_ITEM', payload: masterAssetItem.data });
    }catch(err){
        console.log(`Error fetching single asset: ${err}`);
    }
}

function* assetMasterSaga() {
    yield takeLatest('FETCH_MASTER_ASSETS', getAllAssets);
    yield takeLatest('FETCH_MASTER_ITEM', getSingleAsset);
}

export default assetMasterSaga;
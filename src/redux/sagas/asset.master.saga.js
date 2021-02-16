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

function* postNewAsset(action){
    //debug log
    console.log(`In postNewAsset Saga at:`, action.payload);
    try{
            //POST the action.payload to server
        const addClientResponse = yield axios.post(`/api/master/add`, action.payload );
            //debug log server response to client
        console.log(`Client Response: ${addClientResponse.response}`);
            //get all assets after successful post
        yield put({type: 'FETCH_MASTER_ASSETS'});
    }catch(err){
        console.log(`Error posting single asset: ${err}`);
    }
}

function* deleteSingleAsset(action){
    //debug log
    console.log(`In deleteSingleAsset Saga at:`, action.payload);
    try{
            //POST the action.payload to server
        const deleteClientResponse = yield axios.delete(`/api/master/delete/${action.payload}`);
            //debug log server response to client
        console.log(`Client Response: ${deleteClientResponse.response}`);
            //get all assets after successful delete
        yield put({type: 'FETCH_MASTER_ASSETS'});
        yield put({type: 'UNSET_MASTER_ASSET_ITEM'});       
    }catch(err){
        console.log(`Error deleting single asset: ${err}`);
    }
}

function* editSingleAsset(action){
    //debug log
    console.log(`In editSingleAsset Saga at:`, action.payload);
    try{
            //POST the action.payload to server
        const editClientResponse = yield axios.delete(`/api/master/edit/`, action.payload );
            //debug log server response to client
        console.log(`Client Response: ${editClientResponse.response}`);
            //get all assets after successful delete
        yield put({type: 'FETCH_MASTER_ASSETS'});
            //clear the master item
        yield put({type: 'UNSET_MASTER_ASSET_ITEM'});       
    }catch(err){
        console.log(`Error editing single asset: ${err}`);
    }
}

function* assetMasterSaga() {
    yield takeLatest('POST_NEW_ASSET', postNewAsset);
    yield takeLatest('FETCH_MASTER_ASSETS', getAllAssets);
    yield takeLatest('FETCH_MASTER_ASSET', getSingleAsset);
    yield takeLatest('DELETE_ASSET', deleteSingleAsset);
    yield takeLatest('EDIT_ASSET', editSingleAsset);
}

export default assetMasterSaga;
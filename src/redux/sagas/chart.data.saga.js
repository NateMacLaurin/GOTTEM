import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getChartQuery() {
    //debug log
    console.log(`In getChartQuery Saga`);
    try{
        const chartDataResult = yield axios.get(`/api/master/chart/`);
            //debug console log reponse data
        console.log('chart data results:', chartDataResult.data);
            //pass to reducer
        yield put({type: 'SET_CHART_DATA', payload: chartDataResult.data});
    }catch(err){
        console.log('Error fetching chart data:', error);
    }
}

function* chartDataSaga() {
    yield takeLatest('GET_CHART_DATA', getChartQuery);
}

export default chartDataSaga;
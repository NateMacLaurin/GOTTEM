import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import InventoryDisplay from '../InventoryTable/InventoryTable';
import InventoryChart from '../InventoryChart/InventoryChart';
import Paper from '@material-ui/core/Paper';

function InventoryPage(props) {
    //hooks
  const masterStore = useSelector((store) => store);
  const dispatch = useDispatch();
  
    //effect
  useEffect(() => {
    dispatch({ type: 'UNSET_CHART_DATA'});
    dispatch({ type: 'UNSET_MASTER_ASSET_ITEM' });
    dispatch({ type: 'FETCH_MASTER_ASSETS' });
    dispatch({ type: 'GET_CHART_DATA' });
}, [dispatch]);

  return (
    <div>
      <Paper elevation={3}>
      <InventoryDisplay masterAssetStore={masterStore.masterAssets}/>
      </Paper>
      <Paper elevation={3}>
      <InventoryChart masterChartData={masterStore.chartData}/>
      </Paper>
    </div>
  );
}

export default InventoryPage;

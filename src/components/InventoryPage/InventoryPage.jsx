import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import InventoryDisplay from '../InventoryTable/InventoryTable';
import InventoryChart from '../InventoryChart/InventoryChart';
import Paper from '@material-ui/core/Paper';
import './InventoryPage.css';

function InventoryPage(props) {
  console.log('Pre-Render InventoryPage');
    //hooks
  const masterStore = useSelector((store) => store);
  const dispatch = useDispatch();
  

    
    //post render effect
  useEffect(() => {
      console.log('useEffect InventoryPage');
      dispatch({ type: 'GET_CHART_DATA' });
      dispatch({ type: 'FETCH_MASTER_ASSETS' });
      dispatch({ type: 'UNSET_MASTER_ASSET_ITEM' });
      return () => {
        console.log('cleaning up InventoryPage...');
      }
  }, []);

  console.log('Rendering... InventoryPage');
  return (
    <div className="grid">
      
      <Paper elevation={3}>
      <InventoryDisplay masterAssetStore={masterStore.masterAssets}/>
      </Paper>
      <Paper elevation={3}>
      <InventoryChart masterChartStore={masterStore.chartData}/>
      </Paper>
    </div>
  );
}

export default InventoryPage;

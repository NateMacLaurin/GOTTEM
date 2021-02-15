import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import InventoryDisplay from '../InventoryDisplay/InventoryDisplay';
import InventoryChart from '../InventoryChart/InventoryChart';

function InventoryPage(props) {
    //state vars
  const [heading, setHeading] = useState('Inventory Component');
    //hooks
  const masterAssetStore = useSelector((store) => store.masterAssets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_MASTER_ASSETS' });
}, []);

  return (
    <div>
      <h2>{heading}</h2>
      <InventoryDisplay masterAssetStore={masterAssetStore}/>
      <InventoryChart masterAssetStore={masterAssetStore}/>
    </div>
  );
}

export default InventoryPage;

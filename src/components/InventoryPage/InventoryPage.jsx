import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import InventoryDisplay from '../InventoryTable/InventoryTable';
import InventoryChart from '../InventoryChart/InventoryChart';
import SearchForm from '../SearchForm/SearchForm';

function InventoryPage(props) {
    //state vars
  const [heading, setHeading] = useState('Inventory Component');
    //hooks
  const masterAssetStore = useSelector((store) => store.masterAssets);
  const baseSearchFields = useSelector((store) => store.baseSearchFields);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_MASTER_ASSETS' });
}, []);

  return (
    <div>
      <h2>{heading}</h2>
      <SearchForm baseSearchFields={baseSearchFields}/>
      <InventoryDisplay masterAssetStore={masterAssetStore}/>
      <InventoryChart masterAssetStore={masterAssetStore}/>
    </div>
  );
}

export default InventoryPage;

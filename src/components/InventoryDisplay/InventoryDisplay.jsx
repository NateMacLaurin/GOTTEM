import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InventoryDisplayItem from '../InventoryDisplayItem/InventoryDisplayItem';

function InventoryDisplay(props) {
    //state vars
    const [heading, setHeading] = useState('Inventory Display');

    //hooks
    const dispatch = useDispatch();
    const store = useSelector((store) => store);

    //on load fetch the asset list via redux-saga
    useEffect(() => {
        dispatch({ type: 'FETCH_MASTER_ASSETS' });
    }, []);

  return (
    <div>
      <h2>{heading}</h2>
      <InventoryDisplayItem />
    </div>
  );
}

export default InventoryDisplay;

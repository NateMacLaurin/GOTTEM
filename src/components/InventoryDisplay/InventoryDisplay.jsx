import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InventoryDisplayItem from '../InventoryDisplayItem/InventoryDisplayItem';

function InventoryDisplay(props) {
    //state vars
    const [heading, setHeading] = useState('Inventory Display');

    //hooks
    const dispatch = useDispatch();
    const masterAssetStore = useSelector((store) => store.masterAssets);

    //on load fetch the asset list via redux-saga
    useEffect(() => {
        dispatch({ type: 'FETCH_MASTER_ASSETS' });
    }, []);

  return (
    <div>
      <h2>{heading}</h2>
      <section className="masterTable">
          {masterAssetStore.map(asset => {

              return(
                  <div key={asset.id}>
                    <p>TYPE: {asset.type_name}</p>
                    <p>NAME: {asset.domain_name}</p>
                    <p>IP: {asset.ipv4}</p>
                    <p>MAC: {asset.mac_addr}</p>
                    <p>STATUS: {asset.status_name}</p>
                    <p>LOCATION: {asset.loc_name}</p>
                  </div>
              );
          })}
      </section>
      <InventoryDisplayItem />
    </div>
  );
}

export default InventoryDisplay;

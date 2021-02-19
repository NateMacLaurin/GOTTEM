import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AdminAddItemForm() {

    //local state variables
  const [heading, setHeading] = useState('AdminAddItemForm Component');

  const [alertStatus, setAlertStatus] = useState(false);
  //const [assetName, setAssetName] = useState('NAME_HERE');
  //const [assetNumber, setAssetNumber] = useState(12345678);
  //const [assetIP, setAssetIP] = useState('123.456.789.123');
  //const [assetMAC, setAssetMAC] = useState('12-34-56-78-90-AB');
  //const [assetType, setAssetType] = useState(1);
  //const [assetLocation, setAssetLocation] = useState(1);
  //const [assetStatus, setAssetStatus] = useState(1);

  const [asset, setAsset] = useState({
    assetNumber: '',
    domain_name: '',
    ipv4: '',
    mac_addr: '',
    type_id: '',
    location_id: '',
    status_id: '' 
  });

    //hooks
  const dispatch = useDispatch();

  const handleSubmit = (e) => {

    e.preventDefault();
    //cast ints
    asset.assetNumber = parseInt(asset.assetNumber);
    asset.type_id = parseInt(asset.type_id);
    asset.location_id = parseInt(asset.location_id);
    asset.status_id = parseInt(asset.status_id);

    dispatch({type: 'POST_NEW_ASSET', payload: asset});

    setAsset({
      assetNumber: '',
      domain_name: '',
      ipv4: '',
      mac_addr: '',
      type_id: '',
      location_id: '',
      status_id: ''    
    });

    

    setAlertStatus(true);
  }

  return (
    <div className="addForm">
      <h2>{heading}</h2>
      {/*this will be a form for input*/}
      <form onSubmit={handleSubmit}>
          <span>Local Name:</span>
        <input
            className="localNameField"
            value={asset.domain_name}
            required
            onChange={(event) => setAsset({ ...asset, domain_name: event.target.value})}
        />
          <br /><span>Asset Number:</span>
        <input
            className="assetNumberField"
            value={asset.assetNumber}
            required
            onChange={(event) => setAsset({ ...asset, assetNumber: event.target.value})}
        />
          <br /><span>IP Address:</span>
        <input
            className="assetIPField"
            value={asset.ipv4}
            required
            onChange={(event) => setAsset({ ...asset, ipv4: event.target.value})}
        />
          <br /><span>MAC Address:</span>
        <input
          className="assetMACField"
          value={asset.mac_addr}
          required
          onChange={(event) => setAsset({ ...asset, mac_addr: event.target.value })}
        />
        <label htmlFor="typeSelect">Type:</label>
        <select 
          className="typeSelect" 
          value={asset.type_id} 
          onChange={(event) => setAsset({ ...asset, type_id: event.target.value })}
        >
          <option value={1}>Desktop PC</option>
          <option value={2}>Laptop Macintosh</option>
          <option value={3}>Laptop PC</option>
          <option value={4}>Phone</option>
        </select>
        <label htmlFor="locationSelect">Location:</label>
        <select className="locationSelect" value={asset.location_id} onChange={(event) => setAsset({ ...asset, location_id: event.target.value })}>
            <option value={1}>Main Office 100 Big Chungus Dr</option>
            <option value={2}>Sattelite Office 110 Enterprise Pkwy</option>
            <option value={2}>New Branch 123 Main Street</option>
            <option value={4}>Work From Home</option>
        </select>
        <label htmlFor="statusSelect">Status:</label>
        <select className="statusSelect" value={asset.status_id} onChange={(event) => setAsset({...asset, status_id: event.target.value })}>
            <option value={1}>In Use</option>
            <option value={2}>In Inventory</option>
            <option value={3}>Awaiting Repair</option>
            <option value={4}>Ordered</option>
            <option value={5}>Retired</option>
        </select>
        <button type="submit">Add Asset</button>
        </form>
        {alertStatus ? <h1>Added!</h1> : <></> }
    </div>
  );
}

export default AdminAddItemForm;
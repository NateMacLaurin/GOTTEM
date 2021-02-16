import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AdminAddItemForm() {

    //local state variables
  const [heading, setHeading] = useState('AdminAddItemForm Component');

  const [newAsset, setNewAsset] = useState({});
  const [assetName, setAssetName] = useState('NAME_HERE');
  const [assetNumber, setAssetNumber] = useState(12345678);
  const [assetIP, setAssetIP] = useState('123.456.789.123');
  const [assetMAC, setAssetMAC] = useState('12-34-56-78-90-AB');
  const [assetType, setAssetType] = useState('');
  const [assetLocation, setAssetLocation] = useState('');
  const [assetStatus, setAssetStatus] = useState('');

    //hooks
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    
    e.preventDefault();

    setNewAsset({
      assetNumber: assetNumber,
      domain_name: assetName,
      ipv4: assetIP,
      mac_addr: assetMAC,
      type_id: assetType,
      location_id: assetLocation,
      status_id: assetStatus
    })
    console.log(`Dispatching: ${newAsset}`);

    dispatch({type: 'POST_NEW_ASSET', payload: newAsset});
  }

  return (
    <div className="addForm">
      <h2>{heading}</h2>
      {/*this will be a form for input*/}
      <form onSubmit={handleSubmit}>
          <span>Local Name:</span>
        <input
            className="localNameField"
            value={assetName}
            required
            onChange={(event) => setAssetName(event.target.value)}
        />
          <br /><span>Asset Number:</span>
        <input
            className="assetNumberField"
            value={assetNumber}
            required
            onChange={(event) => setAssetNumber(event.target.value)}
        />
          <br /><span>IP Address:</span>
        <input
            className="assetIPField"
            value={assetIP}
            required
            onChange={(event) => setAssetIP(event.target.value)}
        />
          <br /><span>MAC Address:</span>
        <input
          className="assetMACField"
          value={assetMAC}
          required
          onChange={(event) => setAssetMAC(event.target.value)}
        />
        <label htmlFor="typeSelect">Type:</label>
        <select className="typeSelect" value={assetType} onChange={(event) => setAssetType(event.target.value)}>
            <option value={1}>Desktop PC</option>
            <option value={2}>Laptop Macintosh</option>
            <option value={3}>Laptop PC</option>
            <option value={4}>Phone</option>
        </select>
        <label htmlFor="locationSelect">Location:</label>
        <select className="locationSelect" value={assetLocation} onChange={(event) => setAssetLocation(event.target.value)}>
            <option value={1}>Main Office 100 Big Chungus Dr</option>
            <option value={2}>Sattelite Office 110 Enterprise Pkwy</option>
            <option value={2}>New Branch 123 Main Street</option>
            <option value={4}>Work From Home</option>
        </select>
        <label htmlFor="statusSelect">Status:</label>
        <select className="statusSelect" value={assetStatus} onChange={(event) => setAssetStatus(event.target.value)}>
            <option value={1}>In Use</option>
            <option value={2}>In Inventory</option>
            <option value={3}>Awaiting Repair</option>
            <option value={4}>Ordered</option>
            <option value={5}>Retired</option>
        </select>
        <button type="submit">Add Asset</button>
        </form>
    </div>
  );
}

export default AdminAddItemForm;
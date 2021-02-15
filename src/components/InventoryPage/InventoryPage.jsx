import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import InventoryDisplay from '../InventoryDisplay/InventoryDisplay';
import InventoryChart from '../InventoryChart/InventoryChart';

function InventoryPage(props) {
    
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Inventory Component');

  return (
    <div>
      <h2>{heading}</h2>
      <InventoryDisplay />
      <InventoryChart />
    </div>
  );
}

export default InventoryPage;

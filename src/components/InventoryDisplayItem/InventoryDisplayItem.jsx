import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function InventoryDisplayItem(props) {
    
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Inventory Display Item');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default InventoryDisplayItem;
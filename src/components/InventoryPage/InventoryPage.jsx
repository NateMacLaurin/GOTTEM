import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function InventoryPage(props) {
    
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Inventory Component');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default InventoryPage;

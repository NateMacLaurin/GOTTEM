import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function InventoryChart(props) {
    
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('InventoryChart Display');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default InventoryChart;
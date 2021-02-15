import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function ItemPage(props) {
    
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Item Component');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default ItemPage;
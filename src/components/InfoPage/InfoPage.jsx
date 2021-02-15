import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function AdminPage(props) {
    
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Info Component');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default AdminPage;
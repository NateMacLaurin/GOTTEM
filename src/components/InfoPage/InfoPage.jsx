import React, { useState } from 'react';

function AdminPage(props) {

  const [heading, setHeading] = useState('Info Component');

  return (
    <div>
      <h2>{heading}</h2>
      <p>This page will list helpful information to a first-time user on how to use the app.</p>
    </div>
  );
}

export default AdminPage;
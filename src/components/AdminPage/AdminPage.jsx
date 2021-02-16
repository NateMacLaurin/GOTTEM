import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import AdminAddItemForm from '../AdminAddItemForm/AdminAddItemForm';
import SearchForm from '../SearchForm/SearchForm';

function AdminPage(props) {
    
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Admin Component');

  return (
    <div>
      <h2>{heading}</h2>
      <SearchForm />
      <AdminAddItemForm />
    </div>
  );
}

export default AdminPage;
import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AdminAddItemForm from '../AdminAddItemForm/AdminAddItemForm';
import SearchForm from '../SearchForm/SearchForm';
import ItemDetails from '../ItemDetails/ItemDetails';

function AdminPage(props) {
    
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Admin Component');
  const baseSearchFields = useSelector((store) => store.baseSearchFields);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_SEARCH_FIELDS_BASE' });
  }, []);

  return (
    <div>
      <h2>{heading}</h2>
      <SearchForm baseSearchFields={baseSearchFields}/>
      <ItemDetails />
      <AdminAddItemForm />
    </div>
  );
}

export default AdminPage;
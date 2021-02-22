import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AdminAddItemForm from '../AdminAddItemForm/AdminAddItemForm';
import SearchForm from '../SearchForm/SearchForm';
import ItemDetails from '../ItemDetails/ItemDetails';
import AdminManageUsers from '../AdminManageUsers/AdminManageUsers';
import Paper from '@material-ui/core/Paper';
import TitlePaper from '../TitlePaper/TitlePaper.jsx';

import './AdminPage.css';

function AdminPage(props) {
 
  const targetAsset = useSelector((store) => store.masterAssetItem);
  const baseSearchFields = useSelector((store) => store.baseSearchFields);

  return (
    <div className="adminContainer">
      <div className="adminThreeGridTitle">
        <TitlePaper className="title" title={'Search'}/>
        <TitlePaper className="title" title={'Add Asset'}/>
        <TitlePaper className="title" title={'User Management'}/>
      </div>
      <div className="adminThreeGrid">
        <Paper elevation={3}>
          <SearchForm />
          {targetAsset.length != 0 ? 
            <ItemDetails targetAsset={targetAsset}/>: 
            <h2>Search for an Asset</h2>
          }
        </Paper>
        <Paper elevation={3}>
          <AdminAddItemForm />
        </Paper>
        <Paper elevation={3}> 
          <AdminManageUsers />
        </Paper>
      </div>
    </div>
  );
}

export default AdminPage;
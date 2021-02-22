import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import SearchForm from '../SearchForm/SearchForm';
import ItemDetails from '../ItemDetails/ItemDetails';
import TitlePaper from '../TitlePaper/TitlePaper';
import { Paper } from '@material-ui/core';
import './ItemPage.css';

function ItemPage(props) {
    //vars
  let { id } = useParams();
    //if user clicks "Item Page", default to the first item in master inventory
  id ? id=id : id=1;
    //hooks
  const dispatch = useDispatch();
  const targetAsset = useSelector((store) => store.masterAssetItem);
    //debug log
  console.log(`ID param of redirect: ${id}`);

  return (
    <div className="itemContainer">
      <div className="itemPaperTitle">
          <TitlePaper className="title" title={'Selection'}/>
      </div>
      <div className="itemPaper">
        <Paper elevation={3}>
            <SearchForm />
            {targetAsset.length != 0 ? 
              <ItemDetails targetAsset={targetAsset}/>: 
              <h1>Search for an Item to Populate</h1>
            }
        </Paper>
      </div>
    </div>
  );
}

export default ItemPage;
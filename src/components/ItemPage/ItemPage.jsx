import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import SearchForm from '../SearchForm/SearchForm';
import ItemDetails from '../ItemDetails/ItemDetails';

function ItemPage(props) {
    //vars
  let { id } = useParams();
    //if user clicks "Item Page", default to the first item in master inventory
  id ? id=id : id=1;
    //hooks
  const dispatch = useDispatch();
  const baseSearchFields = useSelector((store) => store.baseSearchFields);
  const targetAsset = useSelector((store) => store.masterAssetItem);
    //debug log
  console.log(`ID param of redirect: ${id}`);
    //states
  const [heading, setHeading] = useState('Item Component');
  const [asset, setAsset] = useState([]);

  useEffect(() => {
    //dispatch({type: 'FETCH_MASTER_ASSET', payload: id});
    dispatch({ type: 'GET_SEARCH_FIELDS_BASE' });
  }, [dispatch])

  return (
    <div>
      <h2>{heading}</h2>
      <SearchForm baseSearchFields={baseSearchFields}/>
      {targetAsset.length != 0 ? 
        <ItemDetails targetAsset={targetAsset}/>:<h1>Search for an Item to Populate</h1>
      }
      {/*this will be a return button to return to inventory page*/}
    </div>
  );
}

export default ItemPage;
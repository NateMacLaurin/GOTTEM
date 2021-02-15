import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from "react-router-dom";


function ItemPage(props) {
    //vars
  let { id } = useParams();
    //if user clicks "Item Page", default to the first item in master inventory
  id ? id=id : id=1;
    //hooks
  const dispatch = useDispatch();
  const masterAsset = useSelector((store) => store.masterAssetItem);
    //debug log
  console.log(`ID param of redirect: ${id}`);
    //states
  const [heading, setHeading] = useState('Item Component');
  const [asset, setAsset] = useState([]);

  useEffect(() => {
    dispatch({type: 'FETCH_MASTER_ITEM', payload: id});
  }, [])

  return (
    <div>
      <h2>{heading}</h2>
      <p>TYPE: {masterAsset[0]?.type_name}</p>
    </div>
  );
}

export default ItemPage;
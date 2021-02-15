import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from "react-router-dom";

function ItemPage(props) {
    //vars
  let { id } = useParams();
    //if user clicks "Item Page", default to the first item in master inventory
  id ? id=id : id=1;
    //debug log
  console.log(`ID param of redirect: ${id}`);
    //states
  const [heading, setHeading] = useState('Item Component');
    //hooks
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'GET_MASTER_ITEM', payload: id});
  }, []);

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default ItemPage;
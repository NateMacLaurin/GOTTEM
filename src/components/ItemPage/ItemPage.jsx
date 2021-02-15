import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { useParams } from "react-router-dom";

function ItemPage(props) {
    //vars
  let { id } = useParams();

  console.log(`ID param of redirect: ${id}`);

    //states
  const [heading, setHeading] = useState('Item Component');
    //hooks
  const store = useSelector((store) => store);

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default ItemPage;
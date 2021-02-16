import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from "react-router-dom";
import {Card, ListGroup} from 'react-bootstrap';
import SearchForm from '../SearchForm/SearchForm';

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
      <SearchForm />
      <Card key={masterAsset[0]?.id} stype={{width: '14rem'}}>
        <Card.Body>
              <Card.Title>{masterAsset[0]?.domain_name} - {masterAsset[0]?.type_name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{masterAsset[0]?.loc_name}</Card.Subtitle>
              <ListGroup variant="info">
                  <ListGroup.Item>{masterAsset[0]?.ipv4}</ListGroup.Item>
                  <ListGroup.Item>{masterAsset[0]?.mac_addr}</ListGroup.Item>
                  <ListGroup.Item>{masterAsset[0]?.status_name}</ListGroup.Item>
                  <ListGroup.Item>{masterAsset[0]?.isRetired}</ListGroup.Item>
              </ListGroup>
              {/*this will be a button to edit this item*/}
              {/*this will be a button to delete this item*/}
          </Card.Body>
      </Card>
      {/*this will be a return button to return to inventory page*/}
    </div>
  );
}

export default ItemPage;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../../bootstrap.min.css';
import '../InventoryTable/InventoryTable.css';

function InventoryTableItem({asset}) {
        //state

        //hooks
    const history = useHistory();
    const dispatch = useDispatch();

    function handleSelectItem(id) {
        console.log(`Item Clicked:${id}`);
        
        dispatch({type: 'FETCH_MASTER_ASSET', payload: id});
            //take us to the item clicked
        history.push(`/item/${id}`);
    }

    return (
        <Card.Body 
            onClick={() => {handleSelectItem(asset.id)}}
        >
            <Card.Title>{asset?.domain_name} - {asset?.type_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{asset?.loc_name}</Card.Subtitle>
            <ListGroup variant="info">
                <ListGroup.Item>{asset?.assetNumber}</ListGroup.Item>
                <ListGroup.Item>{asset?.ipv4}</ListGroup.Item>
                <ListGroup.Item>{asset?.mac_addr}</ListGroup.Item>
                <ListGroup.Item>{asset?.status_name}</ListGroup.Item>
            </ListGroup>
        </Card.Body>
    );
}

export default InventoryTableItem;
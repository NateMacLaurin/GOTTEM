import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../../bootstrap.min.css';
import '../InventoryTable/InventoryTable.css';

function InventoryTableItem({asset}) {
        //state
    const [heading, setHeading] = useState('Inventory Display Item');

        //hooks
    const history = useHistory();
    const dispatch = useDispatch();

    function handleSelectItem(id) {
        console.log(`Item Clicked:${id}`);
            //take us to the item clicked
        history.push(`/item/${id}`);
        dispatch({type: 'FETCH_MASTER_ITEM', payload: id});
    }

    return (
        <Card.Body 
            onClick={() => {handleSelectItem(asset.id)}}
        >
            <Card.Title>{asset?.domain_name} - {asset?.type_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{asset?.loc_name}</Card.Subtitle>
            <ListGroup variant="info">
                <ListGroup.Item>{asset?.ipv4}</ListGroup.Item>
                <ListGroup.Item>{asset?.mac_addr}</ListGroup.Item>
                <ListGroup.Item>{asset?.status_name}</ListGroup.Item>
            </ListGroup>
        </Card.Body>
    );
}

export default InventoryTableItem;
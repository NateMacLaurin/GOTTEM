import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';
import '../../bootstrap.min.css';

function InventoryDisplayItem({asset}) {
    
    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Inventory Display Item');


    return (
        <Card.Body>
            <Card.Title>{asset?.domain_name} - {asset?.type_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{asset?.loc_name}</Card.Subtitle>
            <ListGroup variant="info">
                <ListGroup.Item>{asset?.ipv4}</ListGroup.Item>
                <ListGroup.Item>{asset?.mac_addr}</ListGroup.Item>
                <ListGroup.Item>{asset?.status_name}</ListGroup.Item>
                <ListGroup.Item>{asset?.isRetired}</ListGroup.Item>
            </ListGroup>
            {/*this will be a button to edit this item*/}
            {/*this will be a button to delete this item*/}
        </Card.Body>
    );
}

export default InventoryDisplayItem;
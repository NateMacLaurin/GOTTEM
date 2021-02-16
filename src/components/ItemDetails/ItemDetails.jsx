import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Card, ListGroup, Button} from 'react-bootstrap';

function ItemDetails(props) {

        // Using hooks we're creating local state for a "heading" variable with
        // a default value of 'Functional Component'
    const [heading, setHeading] = useState('ItemDetails Component');
    const dispatch = useDispatch();

    const handleEdit = () => {
        console.log(`Clicked Edit`);
    }

    const handleDelete = () => {
        console.log(`Clicked Delete`);
        dispatch({type: 'DELETE_ASSET', payload: props.targetAsset[0].id});
    }

    return (
        <>
        <h2>{heading}</h2>
        <Card key={props.targetAsset[0]?.id} stype={{width: '14rem'}}>
            <Card.Body>
                <Card.Title>{props.targetAsset[0]?.domain_name}</Card.Title>
                <Card.Subtitle>{props.targetAsset[0]?.type_name}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{props.targetAsset[0]?.loc_name}</Card.Subtitle>
                <ListGroup variant="info">
                    <ListGroup.Item>{props.targetAsset[0]?.ipv4}</ListGroup.Item>
                    <ListGroup.Item>{props.targetAsset[0]?.mac_addr}</ListGroup.Item>
                    <ListGroup.Item>{props.targetAsset[0]?.status_name}</ListGroup.Item>
                    <ListGroup.Item>{props.targetAsset[0]?.isRetired}</ListGroup.Item>
                </ListGroup>
                {/*this will be a button to edit this item*/}
                <Button type="submit" onClick={handleEdit}>Edit</Button>
                {/*this will be a button to delete this item*/}
                <Button type="submit" onClick={handleDelete}>Delete</Button>
          </Card.Body>
        </Card>
        </>
    );
}

export default ItemDetails;
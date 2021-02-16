import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, ListGroup, Button } from 'react-bootstrap';

function ItemDetails(props) {

        // Using hooks we're creating local state for a "heading" variable with
        // a default value of 'Functional Component'
    const [heading, setHeading] = useState('ItemDetails Component');
    const [isEditing, setIsEditing] = useState(false);
        //asset editable fields
    const [assetID, setAssetID] = useState(0);
    const [assetName, setAssetName] = useState('NAME_HERE');
    //const [assetNumber, setAssetNumber] = useState(12345678);
    const [assetIP, setAssetIP] = useState('123.456.789.123');
    const [assetMAC, setAssetMAC] = useState('12-34-56-78-90-AB');
    const [assetType, setAssetType] = useState(0);
    const [assetLocation, setAssetLocation] = useState(0);
    const [assetStatus, setAssetStatus] = useState(0);

        //hooks
    const dispatch = useDispatch();

    const handleEdit = () => {
        console.log(`Clicked Edit`);
        //flip our editing flag
        setIsEditing(true);
    }

    const handleDelete = () => {
        console.log(`Clicked Delete`);
        dispatch({type: 'DELETE_ASSET', payload: assetID});
    }

    const handleSave = () => {
        console.log(`Clicked Save`);
        dispatch({type: 'EDIT_ASSET', payload: {
            id: assetID, 
            domain_name: assetName
          }
        });
        setIsEditing(false);
    }

    useEffect(() => {
        setAssetID(props.targetAsset[0]?.id);
        setAssetName(props.targetAsset[0]?.domain_name);  
        setAssetType(props.targetAsset[0]?.type_name);
        setAssetLocation(props.targetAsset[0]?.loc_name);
        setAssetIP(props.targetAsset[0]?.ipv4);
        setAssetMAC(props.targetAsset[0]?.mac_addr);
        setAssetStatus(props.targetAsset[0]?.status_name);
    }, [])

    return (
        <>
        <h2>{heading}</h2>
        
        <Card key={assetID} stype={{width: '14rem'}}>
            <Card.Body>
            {isEditing ?
            <>
                <Card.Title>
                    <input
                        className="localNameField"
                        value={assetName}
                        onChange={(event) => setAssetName(event.target.value)}
                    />
                </Card.Title>
                <Card.Subtitle>{assetType}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{assetLocation}</Card.Subtitle>
                <ListGroup variant="info">
                    <ListGroup.Item>{assetIP}</ListGroup.Item>
                    <ListGroup.Item>{assetMAC}</ListGroup.Item>
                    <ListGroup.Item>{assetStatus}</ListGroup.Item>
                </ListGroup>
                <Button type="submit" onClick={handleSave}>Save</Button>
            </>
            : 
            <>
                <Card.Title>{assetName}</Card.Title>
                <Card.Subtitle>{assetType}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{assetLocation}</Card.Subtitle>
                <ListGroup variant="info">
                    <ListGroup.Item>{assetIP}</ListGroup.Item>
                    <ListGroup.Item>{assetMAC}</ListGroup.Item>
                    <ListGroup.Item>{assetStatus}</ListGroup.Item>
                </ListGroup>
                <Button type="submit" onClick={handleEdit}>Edit</Button>
            </>
            }
                {/*this will be a button to delete this item*/}
                <Button className="deleteButton"type="submit" onClick={handleDelete}>Delete</Button>
          </Card.Body>
        </Card>
        </>
    );
}

export default ItemDetails;
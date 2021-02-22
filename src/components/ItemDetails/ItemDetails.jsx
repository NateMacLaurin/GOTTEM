import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';
import {Paper, Button} from '@material-ui/core';
import TitlePaper from '../TitlePaper/TitlePaper';
import './ItemDetails.css';

function ItemDetails(props) {

    const [isEditing, setIsEditing] = useState(false);
        //asset editable fields
    const [assetID, setAssetID] = useState(0);
    const [assetName, setAssetName] = useState('NAME_HERE');
    const [assetNumber, setAssetNumber] = useState(0);
    //const [assetNumber, setAssetNumber] = useState(12345678);
    const [assetIP, setAssetIP] = useState('123.456.789.123');
    const [assetMAC, setAssetMAC] = useState('12-34-56-78-90-AB');
    const [assetType, setAssetType] = useState(0);
    const [assetLocation, setAssetLocation] = useState(0);
    const [assetStatus, setAssetStatus] = useState(0);
    const store = useSelector((store) => store);
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
            assetNumber: assetNumber,
            domain_name: assetName,
            ipv4: assetIP, 
            mac_addr: assetMAC
          }
        });
        setIsEditing(false);
    }

    useEffect(() => {
        setAssetID(props.targetAsset[0]?.id);
        setAssetNumber(props.targetAsset[0]?.assetNumber);
        setAssetName(props.targetAsset[0]?.domain_name);
        setAssetIP(props.targetAsset[0]?.ipv4);
        setAssetMAC(props.targetAsset[0]?.mac_addr);
        setAssetType(props.targetAsset[0]?.type_name);
        setAssetLocation(props.targetAsset[0]?.loc_name);
        setAssetStatus(props.targetAsset[0]?.status_name);
    }, [])

    return (
        <div className="itemCard">
            <div className="inventoryPaperTitle">
                <TitlePaper className="title" title={'Details'}/>
            </div>
            <Paper>
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
                <Card.Subtitle>
                    <input
                        className="localNumberField"
                        value={assetNumber}
                        onChange={(event) => setAssetNumber(event.target.value)}
                    />
                </Card.Subtitle>
                <Card.Subtitle>
                    <label htmlFor="typeSelect">Type:</label>
                    <select className="typeSelect" value={assetType} onChange={(event) => setAssetType(event.target.value)}>
                        <option value='1'>Desktop PC</option>
                        <option value='2'>Laptop Macintosh</option>
                        <option value='3'>Laptop PC</option>
                        <option value='4'>Phone</option>
                    </select>
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                    <label htmlFor="locationSelect">Location:</label>
                    <select className="locationSelect" value={assetLocation} onChange={(event) => setAssetLocation(event.target.value)}>
                        <option text='1'>Main Office 100 Big Chungus Dr</option>
                        <option value='2'>Sattelite Office 110 Enterprise Pkwy</option>
                        <option value='2'>New Branch 123 Main Street</option>
                        <option value='4'>Work From Home</option>
                    </select>
                </Card.Subtitle>
                <ListGroup variant="info">
                    <ListGroup.Item>
                        <input
                            className="localIPField"
                            value={assetIP}
                            onChange={(event) => setAssetIP(event.target.value)}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <input
                            className="localMACField"
                            value={assetMAC}
                            onChange={(event) => setAssetMAC(event.target.value)}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <label htmlFor="statusSelect">Status:</label>
                        <select className="statusSelect" value={assetStatus} onChange={(event) => setAssetStatus(event.target.value)}>
                            <option value='1'>In Use</option>
                            <option value='2'>In Inventory</option>
                            <option value='3'>Awaiting Repair</option>
                            <option value='4'>Ordered</option>
                            <option value='5'>Retired</option>
                        </select>        
                    </ListGroup.Item>
                </ListGroup>
                <Button type="submit" onClick={handleSave} variant="contained" color="primary">Save</Button>
            </>
            : 
            <>
                <Card.Title>{assetName}</Card.Title>
                <Card.Subtitle>{assetNumber}</Card.Subtitle>
                <Card.Subtitle>{assetType}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{assetLocation}</Card.Subtitle>
                <ListGroup variant="info">
                    <ListGroup.Item>{assetIP}</ListGroup.Item>
                    <ListGroup.Item>{assetMAC}</ListGroup.Item>
                    <ListGroup.Item>{assetStatus}</ListGroup.Item>
                </ListGroup>
                <Button type="submit" variant="contained" color="primary" onClick={handleEdit}>Edit</Button>
            </>
            }
                {/*this will be a button to delete this item*/}
                { store.user.isAdmin ? <Button className="deleteButton" type="submit" variant="contained" color="secondary" onClick={handleDelete}>Delete</Button> : <></>}
          </Card.Body>
        </Card>
        </Paper>
        </div>
    );
}

export default ItemDetails;
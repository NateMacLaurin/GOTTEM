import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Button, makeStyles, Card, CardContent, TextField, Grid, Select, FormControl, MenuItem, Typography, CardActions} from '@material-ui/core';
import './ItemDetails.css';

function ItemDetails(props) {
       //constant
    const defaultAsset = {
        assetID: 1,
        assetNumber: '',
        domain_name: '',
        ipv4: '',
        mac_addr: '',
        type_name: '',
        type_id: 1,
        location_name: '',
        location_id: 1,
        status_name: '',
        status_id: 1    
    }
        //state
    const [asset, setAsset] = useState(defaultAsset);
    const [isEditing, setIsEditing] = useState(false);

        //hooks
    const store = useSelector((store) => store);
    const dispatch = useDispatch();
    const classes = useStyles();

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

        asset.assetNumber = parseInt(asset.assetNumber);
        asset.type_id = parseInt(asset.type_id);
        asset.location_id = parseInt(asset.location_id);
        asset.status_id = parseInt(asset.status_id);

        dispatch({type: 'EDIT_ASSET', payload: asset});

        setIsEditing(false);
    }

    useEffect(() => {

        setAsset({
            ...asset, 
            assetID: props.targetAsset[0]?.id,
            assetNumber: props.targetAsset[0]?.assetNumber,
            domain_name: props.targetAsset[0]?.domain_name,
            ipv4: props.targetAsset[0]?.ipv4,
            mac_addr: props.targetAsset[0]?.mac_addr,
            type_name: props.targetAsset[0]?.type_name,
            location_name: props.targetAsset[0]?.loc_name,
            status_name: props.targetAsset[0]?.status_name
        })
    }, [])

    return (
        <div className="itemCard" style={{margin: '1em'}}>
            <Card className={classes.root}>
                <CardContent>
                {isEditing ?
                    <form className={classes.root} noValidate onSubmit={handleSave}>
                    <Grid container spacing={2} alignItems="stretch" justify="flex-start" direction="row" xs={12}>
                        <Grid item xs={6}>
                        <TextField
                            id="assetNumberInput"
                            type="number"
                            label="Asset Number"
                            required
                            variant="outlined"
                            value={asset.assetNumber}
                            onChange={(event) => setAsset({ ...asset, assetNumber: event.target.value})}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="DomainNameInput"
                            type="text"
                            label="Domain Name"
                            required
                            variant="outlined"
                            value={asset.domain_name}
                            onChange={(event) => setAsset({ ...asset, domain_name: event.target.value})}
                        />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField
                            id="iPInput"
                            type="text"
                            label="IP Address"
                            required
                            variant="outlined"
                            value={asset.ipv4}
                            onChange={(event) => setAsset({ ...asset, ipv4: event.target.value})}
                        />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField
                            id="mACInput"
                            type="text"
                            label="MAC Address"
                            required
                            variant="outlined"
                            value={asset.mac_addr}
                            onChange={(event) => setAsset({ ...asset, mac_addr: event.target.value })}
                        />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="stretch" justify="space-evenly" direction="column">
                        <Grid item>
                        <FormControl>
                            <Select 
                            id="typeSelect" 
                            type="number"
                            label="Asset Type"
                            required
                            value={asset.type_id} 
                            onChange={(event) => setAsset({ ...asset, type_id: event.target.value })}
                            >
                            <MenuItem value={1}>Desktop PC</MenuItem>
                            <MenuItem value={2}>Laptop PC</MenuItem>
                            <MenuItem value={3}>Laptop Mac</MenuItem>
                            <MenuItem value={4}>Tablet</MenuItem>
                            <MenuItem value={5}>Phone</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                        <Grid item>
                        <FormControl>
                            <Select
                            id="locationSelect" 
                            type="number"
                            label="Location Address"
                            required
                            value={asset.location_id} 
                            onChange={(event) => setAsset({ ...asset, location_id: event.target.value })}
                            >
                            <MenuItem value={1}>Main Office 100 Big Chungus Dr</MenuItem>
                            <MenuItem value={2}>Sattelite Office 110 Enterprise Pkwy</MenuItem>
                            <MenuItem value={3}>New Branch 123 Main Street</MenuItem>
                            <MenuItem value={4}>Work From Home</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                        <Grid item>
                        <FormControl>
                            <Select 
                            id="statusSelect"
                            type="number"
                            label="Status"
                            required
                            value={asset.status_id} 
                            onChange={(event) => setAsset({...asset, status_id: event.target.value })}
                            >
                                <MenuItem value={1}>In Use</MenuItem>
                                <MenuItem value={2}>In Inventory</MenuItem>
                                <MenuItem value={3}>Awaiting Repair</MenuItem>
                                <MenuItem value={4}>Ordered</MenuItem>
                                <MenuItem value={5}>Retired</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                    <Button type="submit" variant="contained" color="primary">Save</Button>
                    {store.user.isAdmin ? <Button className="deleteButton" type="submit" variant="contained" color="secondary" onClick={handleDelete}>Delete</Button> : <></>}
                    </Grid>
                    </form>
                : 
                <>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {asset.assetNumber}
                    </Typography>
                    <Typography variant="h5" component="h2">
                    {asset.domain_name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    {asset.type_name}
                    <br />
                    {asset.status_name}
                    </Typography>
                    <Typography variant="body1" component="p">
                    {asset.location_name}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {asset.ipv4}
                    <br />
                    {asset.mac_addr}
                    </Typography>
                    <CardActions>
                        <Button type="submit" variant="contained" color="primary" onClick={handleEdit}>Edit</Button>
                        {store.user.isAdmin ? <Button className="deleteButton" type="submit" variant="contained" color="secondary" onClick={handleDelete}>Delete</Button> : <></>}
                    </CardActions>
                </>
            }
            </CardContent>
        </Card>
        
        </div>
    );
}

export default ItemDetails;

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        width: '30ch',
      },
      '& .MuiSelect-root': {
        width: '30ch',
      }
      },
    })
  );
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, makeStyles, TextField, Grid, Select, FormControl, MenuItem }  from '@material-ui/core';

function AdminAddItemForm() {
    //constant
  const defaultAsset = {
    assetNumber: '',
    domain_name: '',
    ipv4: '',
    mac_addr: '',
    type_id: 1,
    location_id: 1,
    status_id: 1    
  }
    //local state variables
  const [alertStatus, setAlertStatus] = useState(false);

  const [asset, setAsset] = useState(defaultAsset);

    //hooks
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = (e) => {

    e.preventDefault();
      //cast ints
    asset.assetNumber = parseInt(asset.assetNumber);
    asset.type_id = parseInt(asset.type_id);
    asset.location_id = parseInt(asset.location_id);
    asset.status_id = parseInt(asset.status_id);

    dispatch({type: 'POST_NEW_ASSET', payload: asset});

    setAsset(defaultAsset);

    setAlertStatus(true);
  }

  return (
    <div className="addForm">
      {/*this will be a form for input*/}
      <form className={classes.root} noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="stretch" justify="space-evenly" direction="row">
          <Grid item>
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
         <Grid item>
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
          <Grid item>
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
          <Grid item>
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
        <Button type="submit" variant="contained" color="primary">Add Asset</Button>
        </Grid>
        </form>
        {alertStatus ? <h1>Added!</h1> : <></> }
    </div>
  );
}

export default AdminAddItemForm;

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
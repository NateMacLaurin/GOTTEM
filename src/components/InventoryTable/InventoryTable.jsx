import './InventoryTable.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InventoryTableItem from '../InventoryTableItem/InventoryTableItem';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import {makeStyles} from '@material-ui/core';
import ItemDialog from '../ItemDialog/ItemDialog.jsx';

function InventoryTable(props) {
        //state
    const [open, setOpen] = useState(false);

        //hooks
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    

    function handleSelectItem(id) {
        console.log(`Item Clicked:${id}`);
        
        dispatch({type: 'FETCH_MASTER_ASSET', payload: id});
            //take us to the item clicked
        history.push(`/item/${id}`);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <section className="masterTable">
            <TableContainer component={Paper}>
                <Table aria-label="simple table" >
                    <TableHead>
                        <TableRow className={classes.header}>
                            <TableCell>Asset Number</TableCell>
                            {/* <TableCell>Domain Name</TableCell>
                            <TableCell>IP Address</TableCell>
                            <TableCell>MAC Address</TableCell> */}
                            <TableCell>Asset Type</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
            {props.masterAssetStore.map((asset) => {
                return(
                    <TableRow className={classes.root} key={ asset.id } onClick={() => handleSelectItem(asset.id)}>
                        <InventoryTableItem asset={asset}/>
                    </TableRow>
                );
            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>  
        </div>
    );
}

export default InventoryTable;

const useStyles = makeStyles((theme) => ({
    root: {
        '&:nth-child(even)': {
            backgroundColor: '#e1eaea'
        },
        },
    header: {
        backgroundColor: '#6b6caf',
    }
    })
);
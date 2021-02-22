import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ItemDialog(props) {

    return (
        <>
            <div className="dialog-wrapper">
                <div className="dialog-backdrop">
                    <div className="dialog-box">
                    <Dialog
                        open={props.open}
                        onClose={props.handleClose}
                        asset={props.asset}
                    >
                        <DialogTitle id="form-dialog-title">Title Text</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Clicked: {props.asset.assetNumber}
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDialog;

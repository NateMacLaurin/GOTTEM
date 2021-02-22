import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';

function AdminManageUsers(props) {
    const thisUser = useSelector((store) => store.user);
    const userStore = useSelector((store) => store.usersList);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_USERS' });
    }, [])

    const toggleAdmin = (id) => {
        console.log(`toggleAdmin Clicked! ${id}`);
        dispatch({type: 'USER_TOGGLE_ADMIN', payload: id });
    }

    return (
        <div>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>User Name</TableCell>
                <TableCell>User ID</TableCell>
                <TableCell>Admin Status</TableCell>
            </TableRow>
            </TableHead>
            <TableBody >
            {userStore.map((user) => (
                (thisUser.id != user.id) ?
                    <TableRow key={ user.id } className={classes.root}>
                        <TableCell component="th" scope="row">
                            { user.username }
                        </TableCell>
                        <TableCell>{ user.id }</TableCell>
                        <TableCell>{ user.isAdmin ? 
                            <Button variant="contained" color="secondary" addid={user.id} onClick={() => toggleAdmin(user.id)}>Remove Admin</Button> : 
                            <Button variant="contained" color="primary" addid={user.id} onClick={() => toggleAdmin(user.id)}>Add Admin</Button> }
                        </TableCell>
                    </TableRow> 
                : 
                    <TableRow key={ user.id }>
                    <TableCell component="th" scope="row">
                        { user.username }
                    </TableCell>
                    <TableCell>{ user.id }</TableCell>
                    <TableCell>This is you.</TableCell>
                </TableRow> 
                
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    );
}

export default AdminManageUsers;

const useStyles = makeStyles((theme) => ({
    root: {
        '&:nth-child(even)': {
            backgroundColor: '#e1eaea'
        },
        },
    })
);
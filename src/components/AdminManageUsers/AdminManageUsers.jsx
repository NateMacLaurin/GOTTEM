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
import Alert from '@material-ui/lab/Alert';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function TemplateFunction(props) {
        // Using hooks we're creating local state for a "heading" variable with
        // a default value of 'Functional Component'
    const thisUser = useSelector((store) => store.user);
    const userStore = useSelector((store) => store.usersList);
    const [heading, setHeading] = useState('AdminManageUsers Component');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_USERS' });
    }, [])

    const toggleAdmin = (id) => {
        console.log(`toggleAdmin Clicked! ${id}`);
        dispatch({type: 'USER_TOGGLE_ADMIN', payload: id });
    }

    return (
        <div>
        <h2>{heading}</h2>
        <TableContainer component={Paper}>
        <Table  aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>User Name</TableCell>
                <TableCell>User ID</TableCell>
                <TableCell>Admin Status</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {userStore.map((user) => (
                (thisUser.id != user.id) ?
                    <TableRow key={ user.id }>
                        <TableCell component="th" scope="row">
                            { user.username }
                        </TableCell>
                        <TableCell>{ user.id }</TableCell>
                        <TableCell>{ user.isAdmin ? 
                            <Button addid={user.id} onClick={() => toggleAdmin(user.id)}>Remove Admin</Button> : 
                            <Button addid={user.id} onClick={() => toggleAdmin(user.id)}>Add Admin</Button> }
                        </TableCell>
                    </TableRow> 
                : 
                    <TableRow key={ user.id }>
                    <TableCell component="th" scope="row">
                        { user.username }
                    </TableCell>
                    <TableCell>{ user.id }</TableCell>
                    <TableCell>Can't Toggle Yourself!</TableCell>
                </TableRow> 
                
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    );
}

export default TemplateFunction;
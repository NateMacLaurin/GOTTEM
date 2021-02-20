import React from 'react';
import TableCell from '@material-ui/core/TableCell';

function InventoryTableItem({asset}) {

    return (
        <>
            <TableCell>{asset?.assetNumber}</TableCell>
            <TableCell>{asset?.domain_name}</TableCell>
            <TableCell>{asset?.ipv4}</TableCell>
            <TableCell>{asset?.mac_addr}</TableCell>
            <TableCell>{asset?.type_name}</TableCell>
            <TableCell>{asset?.loc_name}</TableCell>
            <TableCell>{asset?.status_name}</TableCell>
        </>
    );
}

export default InventoryTableItem;
import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function InventoryDisplayItem({asset}) {
    
    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Inventory Display Item');


    return (
        <tr key={asset?.id}>
            <td>{asset?.type_name}</td>
            <td>{asset?.domain_name}</td>
            <td>{asset?.ipv4}</td>
            <td>{asset?.mac_addr}</td>
            <td>{asset?.status_name}</td>
            <td>{asset?.loc_name}</td>
        </tr>
    );
}

export default InventoryDisplayItem;
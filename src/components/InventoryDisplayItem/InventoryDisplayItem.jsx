import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function InventoryDisplayItem({asset}) {
    
    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Inventory Display Item');


    return (
        <div>
            <p>TYPE: {asset?.type_name}</p>
            <p>NAME: {asset?.domain_name}</p>
            <p>IP: {asset?.ipv4}</p>
            <p>MAC: {asset?.mac_addr}</p>
            <p>STATUS: {asset?.status_name}</p>
            <p>LOCATION: {asset?.loc_name}</p>
        </div>
    );
}

export default InventoryDisplayItem;
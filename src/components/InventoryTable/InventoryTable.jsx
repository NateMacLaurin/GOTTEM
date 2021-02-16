import React, { useState } from 'react';
import InventoryTableItem from '../InventoryTableItem/InventoryTableItem';
import AddItemForm from '../AdminAddItemForm/AdminAddItemForm';
import { Card, Button, ListGroup } from 'react-bootstrap';
import './InventoryTable.css';
import '../../bootstrap.min.css';

function InventoryTable(props) {
        //state vars
    const [heading, setHeading] = useState('Inventory Display');

    return (
        <div>
        <h2>{heading}</h2>
        <section className="masterTable">
            {props.masterAssetStore.map((asset) => {
                return(
                    <Card 
                        key={asset.id} 
                        className="tableCard" 
                        stype={{width: '14rem'}} 
                    >
                        <InventoryTableItem asset={asset}/>
                    </Card>
                );
            })}
        </section>
        {/* Chart.js display here */}
        </div>
    );
}

export default InventoryTable;

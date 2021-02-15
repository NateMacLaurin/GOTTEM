import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import InventoryDisplayItem from '../InventoryDisplayItem/InventoryDisplayItem';
import AddItemForm from '../AddItemForm/AddItemForm';
import { Card, Button, ListGroup } from 'react-bootstrap';
import './InventoryDisplay.css';
import '../../bootstrap.min.css';

function InventoryDisplay(props) {
        //state vars
    const [heading, setHeading] = useState('Inventory Display');

        //hooks
    const history = useHistory();
    const dispatch = useDispatch();

    function handleSelectItem(id) {
        console.log(`Item Clicked:${id}`);
            //take us to the item clicked
        history.push(`/item/${id}`);
        dispatch({type: 'FETCH_MASTER_ITEM', payload: id});
    }

    return (
        <div>
        <h2>{heading}</h2>
        <section className="masterTable">
            {props.masterAssetStore.map((asset) => {
                return(
                    <Card key={asset.id} stype={{width: '14rem'}} onClick={() => {handleSelectItem(asset.id)}}>
                        <InventoryDisplayItem asset={asset}/>
                    </Card>
                );
            })}
        </section>
        <AddItemForm />
        </div>
    );
}

export default InventoryDisplay;

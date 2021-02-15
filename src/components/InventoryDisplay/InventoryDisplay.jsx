import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import InventoryDisplayItem from '../InventoryDisplayItem/InventoryDisplayItem';
import { Card, Button, ListGroup } from 'react-bootstrap';
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
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>IP</th>
                        <th>MAC</th>
                        <th>Status</th>
                        <th>Location</th> 
                    </tr>
                </thead>
                <tbody>
                    {props.masterAssetStore.map((asset) => {
                        return(
                            <InventoryDisplayItem key={asset.id} asset={asset}/>
                        );
                    })};
                </tbody>
            </table>
        </section>
        <InventoryDisplayItem />
        </div>
    );
}

export default InventoryDisplay;

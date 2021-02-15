import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import InventoryDisplayItem from '../InventoryDisplayItem/InventoryDisplayItem';

function InventoryDisplay(props) {
        //state vars
    const [heading, setHeading] = useState('Inventory Display');

        //hooks
    const history = useHistory();

    function handleSelectItem(id) {
        console.log(`Item Clicked:${id}`);
            //take us to the item clicked
        history.push(`/item/${id}`);
    }

    return (
        <div>
        <h2>{heading}</h2>
        <section className="masterTable">
            {props.masterAssetStore?.map(asset => {
                return(
                    <div key={asset?.id} onClick={() => handleSelectItem(asset.id)}>
                        <InventoryDisplayItem asset={asset}/>
                    </div>
                );
            })}
        </section>
        <InventoryDisplayItem />
        </div>
    );
}

export default InventoryDisplay;

import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';

function SearchForm(props) {
        //state
    const [searchString, setSearchString] = useState('');
        //default the state to domain_name for consistency and no null search
    const [searchCategory, setSearchCategory] = useState('domain_name');
    const [searchBase, setSearchBase] = useState([]);

        //hooks
    const store = useSelector((store) => store);
    const dispatch = useDispatch();
        //clickhandler
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`handleSubmit Search - Category: ${searchCategory} String: ${searchString}`);
        dispatch({type:'GET_INVENTORY_SEARCH_QUERY', payload: {searchCategory, searchString}});
        setSearchString('');
        dispatch({type: 'UNSET_MASTER_ASSET_ITEM'});
    };

    useEffect(() => {
        setSearchBase(props.baseSearchFields);
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <span>Search:</span>
                <input
                    value={searchString}
                    default='Search'
                    onChange={(event) => setSearchString(event.target.value)}
                />
                <select value={searchCategory} onChange={(event) => setSearchCategory(event.target.value)}>
                    {props.baseSearchFields.map((category) => {
                        return(
                            <option key={category.id} value={category.base_category}>{category.base_category}</option>
                        )
                    })}
                </select>
                <Button type="submit" variant="contained" color="primary">Search</Button>
            </form>
        </div>
    );
}

export default SearchForm;
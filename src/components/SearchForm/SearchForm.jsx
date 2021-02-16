import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function SearchForm(props) {
        //state
    const [heading, setHeading] = useState('SearchForm Component');
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
        console.log(`handleSubmit Search - String: ${searchString} Category: ${searchCategory}`);
        //dispatch({type:'GET_INVENTORY_SEARCH_QUERY', payload: searchString, searchCategory});
    };

        //changeHandler
    const handleChange = () => {

    }

    useEffect(() => {
        dispatch({ type: 'GET_SEARCH_FIELDS_BASE' });
        setSearchBase(store.baseSearchFields);
    }, []);

    return (
        <div>
        <h2>{heading}</h2>
            <form onSubmit={handleSubmit}>
                <span>Search:</span>
                <input
                    value={searchString}
                    default='Search'
                    onChange={(event) => setSearchString(event.target.value)}
                />
                <select value={searchCategory} onChange={(event) => setSearchCategory(event.target.value)}>
                    {searchBase.map((category) => {
                        return(
                            <option key={category.id} value={category.base_category}>{category.base_category}</option>
                        )
                    })}
                </select>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchForm;
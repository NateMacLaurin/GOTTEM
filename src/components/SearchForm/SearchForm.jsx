import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function SearchForm(props) {
        //state
    const [heading, setHeading] = useState('SearchForm Component');
    const [searchString, setSearchString] = useState('');
    const [searchCategory, setSearchCategory] = useState('');

        //hooks
    const store = useSelector((store) => store);
    const dispatch = useDispatch();

        //clickhandler
    const handleSubmit = (event) => {
        event.preventDefault();
        //dispatch({type:'GET_INVENTORY_SEARCH_QUERY', payload: searchString, searchCategory})
    };

    return (
        <div>
        <h2>{heading}</h2>
            <form onSubmit={handleSubmit}>
                <span>Search:</span>
                <input
                    value={searchString}
                    onChange={(event) => setSearchString(event.target.value)}
                />
                {/*<select value={this.state.value} onChange={this.handleChange}>
                    <option value="domain_name">Device Name</option>
                </select>*/}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SearchForm;
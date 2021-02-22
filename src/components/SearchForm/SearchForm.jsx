import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, makeStyles, TextField, Grid, Select, FormControl, MenuItem, InputAdornment }  from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function SearchForm() {
    const defaultSearchQuery = {
        searchString: '',
        searchCategory: 'assetNumber'
    }

        //state
    const [searchQuery, setSearchQuery] = useState(defaultSearchQuery);
    const classes = useStyles();

        //hooks
    const dispatch = useDispatch();
        //clickhandler
    const handleSubmit = (event) => {
        event.preventDefault();
        if(searchQuery.searchCategory==='assetNumber'){
            parseInt(searchQuery.searchCategory);
        }
        console.log(`handleSubmit Search - searchCategory: ${searchQuery.searchCategory} searchString: ${searchQuery.searchString}`);
        dispatch({type:'GET_INVENTORY_SEARCH_QUERY', payload: searchQuery});
        setSearchQuery(defaultSearchQuery);
        dispatch({type: 'UNSET_MASTER_ASSET_ITEM'});
    };

    return (
        <div>
            <form className={classes.root} onSubmit={handleSubmit}>
                <Grid container spacing={2} alignItems="flex-start" justify="flex-end" direction="row">
                <Grid item>
                <TextField
                    id="searchStringInput"
                    type="search"
                    required
                    variant="outlined"
                    startadornment={
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      }
                    value={searchQuery.searchString}
                    onChange={(event) => setSearchQuery({ ...searchQuery, searchString: event.target.value })}
                />
                </Grid>
                <Grid item>
                    <FormControl>
                        <Select 
                            id="searchQuery"
                            type="text"
                            required
                            variant="outlined"
                            value={searchQuery.searchCategory} 
                            onChange={(event) => setSearchQuery({ ...searchQuery, searchCategory: event.target.value })}
                            
                        >
                            <MenuItem value={'assetNumber'}>Asset Number</MenuItem>
                            <MenuItem value={'domain_name'}>Domain Name</MenuItem>
                            <MenuItem value={'ipv4'}>IP Address</MenuItem>     
                            <MenuItem value={'mac_addr'}>MAC Address</MenuItem>               
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary"
                        startIcon={<SearchIcon />}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
            </form>
        </div>
    );
}

export default React.memo(SearchForm);

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        width: '25ch',
      },
      '& .MuiSelect-root': {
        width: '15ch',
      }
      },
    })
  );
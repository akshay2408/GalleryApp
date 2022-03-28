import React, { useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInput } from '../Styled';

const yourApiKey = '784ecafdeda6c71793d6e3a90d802de9';

const data = {
  method: 'flickr.photos.search',
  api_key: yourApiKey,
  text: 'flower',
  sort: 'interestingness-desc',
  per_page: 9,
  license: '4',
  extras: 'owner_name,license',
  format: 'json',
  nojsoncallback: 1,
};

const parameters = new URLSearchParams(data);

const url = `https://api.flickr.com/services/rest/?${parameters}`;


const Header = (props) => {
  return (
    <>
    <Box sx={{ flexGrow: 1, backgroundColor: 'red' }}>
      <AppBar position="static" color='default'>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           Gallery App
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInput
              type="search" 
              name="search" 
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => props.handleSearchChange(e.target.value)}
              />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}
export default Header;
import { InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const SearchField = styled(TextField)`
  width: auto;
  float: right;
  svg {
    height: 20px;
    width: 20px;
  }
`;

const SearchBar = ({ setSearchTerm, allPosts, setSearchResults }) => {
  function handleSearchChange(e) {
    const posts = allPosts.filter(
      (item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(posts);
    setSearchTerm(e.target.value);
  }

  return (
    <SearchField
      label="Search"
      margin="dense"
      variant="outlined"
      onChange={handleSearchChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;

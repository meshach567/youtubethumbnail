"use client";

import  { useState } from 'react';
import { useRouter } from "next/router";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar () {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter()

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      router.push(`/search/${searchTerm}`);
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

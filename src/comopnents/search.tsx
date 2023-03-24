import React from 'react';
import TextField from '@mui/material/TextField';


function SearchTextField(props:any) {
  const SearchFieldDesign = {
    width: '900px',
  
    '& label.Mui-focused': {
      color: 'blue',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'blue', 
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'blue',
      },
    '&:hover fieldset': {
      borderColor: 'blue',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'blue',
    },
  },
};

  return (
    <TextField
        sx={SearchFieldDesign}
        className='search-text-field-pos'
        type='text'
        value={props.word}
        onChange={props.searchAddress}
        label='Enter a word'
        variant='outlined'
        color='secondary'
    />
  );
}

export default SearchTextField
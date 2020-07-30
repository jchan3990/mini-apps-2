import React, { useState } from 'react';

const SearchBar = (props) => {
  return (
    <form id='search'>
      <label> Search:
        <input type="text" name="name" onChange={(event) => setKeyword(event.target.value)}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
};

export default SearchBar;
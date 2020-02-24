import React from 'react';
import {PropTypes} from 'prop-types';
import { APIKey } from '../APIKey';

const SearchBox = (props) => {
  const getSearch = async (e) => {
    e.preventDefault();
    const s = document.getElementById('searchboxInput').value;
    if(s === '') return;
    const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${s}&api_key=${APIKey}&limit=25`);
    const data = await response.json();

    // lift Up states as props!
    props.searchQuery(s);
    props.dataQuery(data);
  };

  return (
    <div className="searchbox">
      <form onSubmit={getSearch}>
        <input id="searchboxInput" className="searchbox__input" type="text" placeholder="What do you want to LOL about? Type in" />
      </form>
    </div>
  )
};

SearchBox.propTypes = {
  dataQuery: PropTypes.func,
  searchQuery: PropTypes.func
}

export default SearchBox;
import React, {useState} from "react";

function Search({searchQuery, setSearchQuery}) {
  function handleChange(event) {
    // extract text from input && update state
    setSearchQuery(event.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt"
          onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;

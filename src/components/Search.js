import React, { useState } from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input type="text" className="input" onChange={inputHandler} />
      <button onClick={search}>search!</button>
    </div>
  );
};

export default Search;

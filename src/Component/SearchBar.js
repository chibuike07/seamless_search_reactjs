import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { SET_QUERY } from "../reducer/action";

const SearchBar = () => {
  const [{ query }, dispatch] = useContext(SearchContext);

  const handleQuery = (e) => {
    e.preventDefault();
    dispatch({ type: SET_QUERY, payload: e.target.value });
  };

  return (
    <form className="form-group d-flex justify-content-center mt-3 mb-3">
      <input
        type="text"
        name="search"
        placeholder="Search by Name"
        value={query}
        onChange={(e) => handleQuery(e)}
        className="form-control w-50"
      />
    </form>
  );
};

export default SearchBar;

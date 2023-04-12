import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSearchTerm } from "./searchTermSlice";
import { setSearchTerm } from "./searchTermSlice";

export const SearchBar = () => {

  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const handleChange = ({target}) => {
    const input = target.value;
    dispatch(setSearchTerm(input));
  }

  return (
    <>
      <input id="searchBar" value={searchTerm} onChange= {handleChange} placeholder="Search posts" />
      <button>Clear</button>
    </>
  );
};

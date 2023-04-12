import React from "react";
import { selectSearchTerm } from "./searchTermSlice";
import { setSearchTerm } from "./searchTermSlice";



export const SearchBar = () => {
  return (
    <>
      <input id="searchBar" value="" placeholder="Search posts" />
    </>
  );
};

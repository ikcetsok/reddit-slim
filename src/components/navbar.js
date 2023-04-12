import React from "react";
import "./navbar.css";
import { SearchBar } from "../features/searchbar/searchbar";

export const NavBar = () => {
  return (<nav className="NavBar">
    <img src="/logo.jpeg" alt="logo"/>
    <div className="SearchBar"><SearchBar/></div>
  </nav>);
};

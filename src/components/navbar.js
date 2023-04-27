import React from "react";
import { useState } from "react";
import { loadPosts } from "../features/posts/postsSlice";
import { useSelector, useDispatch } from "react-redux";
import "./navbar.css";
import { SearchBar } from "../features/searchbar/searchbar";
import { selectFeeds } from "../features/feeds/feedsSlice";

export const NavBar = () => {
  const [subreddit, setSubreddit] = useState(0);

  const subreddits = useSelector(selectFeeds);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if(target.value==0) return ;
    setSubreddit(target.value);
    dispatch(loadPosts(target.value));
  };

  return (
    <nav className="NavBar">
      <div className="wideNav">
      <img src="/logo.jpeg" alt="logo" />
      <div className="SearchBar">
        <SearchBar />
      </div>
      </div>
      <div className="dropdownList">
        <select value={subreddit} onChange={handleChange}>
          <option value={0}> </option>
          {subreddits.map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>
        </div>
      
    </nav>
  );
};

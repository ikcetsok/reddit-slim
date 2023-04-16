import React from "react";
import { selectFeeds } from "../features/feeds/feedsSlice";
import { loadPosts } from "../features/posts/postsSlice";
import { useSelector, useDispatch } from "react-redux";

export const SideBar = () => {

    const dispatch = useDispatch();
    const feeds = useSelector(selectFeeds);
    

    return (
        <>
        {feeds.map((feed, index)=>{
            return <button className="subreddit" key={index} onClick={()=>{dispatch(loadPosts(feed))}}>
            {feed}
            </button>
        })}
        </>
    )

}
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, loadPosts } from "./postsSlice";
import { Post } from "./post.js";

export default function Posts() {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();
  const element = posts.posts[0]?.data?.author;
  const turn = () => {
    dispatch(loadPosts());
  };

  console.log("posty", posts);

  return (
    <section>
      {posts.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.posts.slice(0, 5).map((post) => {
          return <Post post={post}/>
        })
      )}


    </section>
  );
}

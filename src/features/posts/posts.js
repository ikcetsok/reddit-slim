import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, loadPosts } from "./postsSlice";
import { Post } from "./post.js";


export default function Posts() {
  const posts = useSelector(selectPosts);

  return (
    <section>
      {posts.isLoading ? (
        <h1> <i class="fas fa-spinner fa-spin"></i>  Loading...</h1>
      ) : (
        posts.posts.slice(0, 5).map((post) => {
          return <Post post={post}/>
        })
      )}


    </section>
  );
}

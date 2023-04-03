import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, loadPosts } from "./postsSlice";

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
      {posts.isLoading ? <h1>Loading...</h1> : <h1>Dojla {element}</h1>}

      <button onClick={turn}>Load</button>
    </section>
  );
}

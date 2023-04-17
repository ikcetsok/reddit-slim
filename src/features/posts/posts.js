import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, loadPosts } from "./postsSlice";
import { Post } from "./post.js";

export default function Posts() {
  const posts = useSelector(selectPosts);

  return (
    <section className="Posts">
      {posts.isLoading ? (
        <>
          <h1 className="LoadingPost">
            <i class="fas fa-spinner fa-spin"></i> Loading...
          </h1>
          {Array(5)
            .fill({
              data: {
                title: " ",
                selftext_html: " ",
                author: "",
                score: "",
              },
            })
            .map((post) => (
              <Post post={post} />
            ))}
        </>
      ) : (
        posts.posts.slice(0, 5).map((post) => {
          return <Post post={post} />;
        })
      )}
    </section>
  );
}

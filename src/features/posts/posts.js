import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import { selectSearchTerm } from "../searchbar/searchTermSlice";
import { Post } from "./post.js";

export default function Posts() {
  const posts = useSelector(selectPosts);
  const searchTerm = useSelector(selectSearchTerm);

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
        posts.posts
          .slice(0, 5)
          .filter((post, index) => {
            if (searchTerm.length === 0) {
              return true;
            } else {
              if (
                post?.data?.title
                  .toLowerCase()
                  .indexOf(searchTerm.toLowerCase()) !== -1
              ) {
                return true;
              }
              return false;
            }
          })
          .map((post) => {
            return <Post post={post} />;
          })
      )}
    </section>
  );
}

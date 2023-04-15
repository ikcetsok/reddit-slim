import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./post.css";

export function Post({ post }) {
  const data = post.data;
  const title = data.title;
  const content = data.selftext_html;
  const author = data.author;

  return (
    <div className="post">
        <div></div>
      <div>
        <p className="author">Posted by {author}</p>
        <h1 className="title">{title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: ReactHtmlParser(content) }}
        />
      </div>
    </div>
  );
}

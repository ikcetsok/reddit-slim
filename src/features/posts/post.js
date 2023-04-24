import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./post.css";
import { Comments } from "../comments/comments";

export function Post({ post }) {
  const data = post.data;
  const title = data.title;
  const content = data.selftext_html;
  const author = data.author;
  const score = data.score;
  const name = data.name;

  // console.log("data", data);

  return (
    <div className="post">
      <div className="innerPost">
        <div className="info">
          <i class="fas fa-arrow-up"></i>
          <p>{score}</p>
          <i class="fas fa-arrow-down"></i>
        </div>

        <div className="mainPart">
          {author ? <p className="author">Posted by {author}</p> : <></>}
          <h1 className="title">{title}</h1>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: ReactHtmlParser(content) }}
          />
        </div>
      </div>
      <Comments
        permalink={data.permalink}
        num_comments={data.num_comments}
        name={name}
      />
    </div>
  );
}

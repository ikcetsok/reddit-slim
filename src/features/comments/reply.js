import React from "react";
import ReactHtmlParser from "react-html-parser";

export const Reply = ({ reply }) => {
  const data = reply.data;
  const author = data.author;
  const replies = data.replies;
  const content = data.body_html;
  const score = data.score;

  return (
    <div className="reply">
      <p className="commentAuthor">
        Posted by {author} with Score: <strong>{score}</strong>
      </p>
      <div
        className="Content"
        dangerouslySetInnerHTML={{ __html: ReactHtmlParser(content) }}
      />
      {replies && replies.data.children.map((reply) => <Reply reply={reply} />)}
    </div>
  );
};

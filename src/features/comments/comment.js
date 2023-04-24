import React from "react";
import ReactHtmlParser from "react-html-parser";

export const Comment = ({comment}) => {
    const data = comment.data;
    const author = data.author;
    const replies = data.replies;
    const content = data.body_html;
    const score = data.score;

return (
    <div className="comment">
        <p className="commentAuthor">Posted by {author} with Score: <strong>{score}</strong></p>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: ReactHtmlParser(content) }}
        /> 
    </div>
)

}
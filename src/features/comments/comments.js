import React from "react";
import { useState } from "react";
import { selectComments } from "./commentsSlice";
import { loadComments } from "./commentsSlice";
import { resetComments } from "./commentsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Comment } from "./comment";
import "./comments.css";

export const Comments = ({ permalink, num_comments, name }) => {
  const [buttonSwitch, setButtonSwitch] = useState(true);
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();
  let show = false;
  if (
    comments.comments?.[0]?.data?.parent_id == name &&
    comments.comments.length > 0
  )
    show = true;
  return (
    <div className="Comments">
      <div className="loadCommentsButton">
        <button
          className="commentButton"
          onClick={() => {
            if (buttonSwitch) {
              setButtonSwitch(false);
              dispatch(loadComments(permalink));
            } else {
              setButtonSwitch(true);
              dispatch(resetComments());
            }
          }}
        >
          <p></p> <p>Comments {num_comments}</p>{" "}
          <p>
            <i class="fa-regular fa-caret-down"></i>
          </p>
        </button>
      </div>
      {comments.isLoading && (
        <>
          <h1 className="LoadingComment">
            <i class="fas fa-spinner fa-spin"></i> Loading...
          </h1>
        </>
      )}
      {show &&
        comments.comments.map((comment) => {
          return <Comment comment={comment} />;
        })}
      {show && (
        <button
          className="closeComments"
          onClick={() => {
            dispatch(resetComments());
          }}
        >
          Close Comments
        </button>
      )}
    </div>
  );
};

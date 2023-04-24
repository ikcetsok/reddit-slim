import React from "react";
import { selectComments } from "./commentsSlice";
import { loadComments } from "./commentsSlice";
import { resetComments } from "./commentsSlice";
import { useSelector, useDispatch } from "react-redux";

export const Comments = ({permalink, num_comments, name}) => {
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();
  let show =  false;
  if (comments.comments?.[0]?.data?.parent_id == name) show=true;
  return (
    <div className="Comments">
      <div className="loadCommentsButton">
        <button
          onClick={() => {
            dispatch(loadComments(permalink));
          }}
        >
          Comments {num_comments}
        </button>
      </div>
      {show && <div>sukcessss</div>}
       </div>
  );
};

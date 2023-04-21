import React from "react";
import { selectComments } from "./commentsSlice";
import { loadComments } from "./commentsSlice";
import { resetComments } from "./commentsSlice";
import { useSelector, useDispatch } from "react-redux";

export const Comments = ({permalink, num_comments}) => {
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();
    console.log('num_comment', num_comments);
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

      {/* Tutaj musisz dodac najpier warunek zeby pokazywal loading i pokazywal tylko jak length jest > 0. Wtedy nowy komponent Comment */}
    </div>
  );
};

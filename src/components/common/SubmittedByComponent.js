import React from "react";
import "./css/SubmittedByComponent.css";
import { Link } from "react-router-dom";

const SubmittedByComponent = (props) => {
  return (
    <span className="post__info">
      submitted by
      <Link
        to={{
          pathname: `/filter/user/${props.commentAuthor}`,
          info: props.info,
        }}
      >
        <a>{props.commentAuthor}</a>
      </Link>
    </span>
  );
};

export default SubmittedByComponent;

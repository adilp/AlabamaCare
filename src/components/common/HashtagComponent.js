import React from "react";
import "./css/HashtagComponent.css";
import { Link } from "react-router-dom";

const HashtagComponent = (props) => {
  return (
    <div className="post__hashTag">
      <Link
        to={{
          pathname: `/filter/hashtag/${props.hashTagURL}`,
          info: props.info,
        }}
      >
        {props.hashTag ? <a>{props.hashTag}</a> : ""}
      </Link>
    </div>
  );
};

export default HashtagComponent;

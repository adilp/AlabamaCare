import React, { useState } from "react";
import env from "react-dotenv";
import "./css/PostItem.css";
import { NavLink } from "react-router-dom";
import HashtagComponent from "./common/HashtagComponent";
import SubmittedByComponent from "./common/SubmittedByComponent";
import Votes from "./common/Votes";

const PostItem = (props) => {
  const { hashtag, text, image, commentAuthor, _id } = props.comment;

  return (
    <div className="post">
      <Votes info={props.comment} />
      <div className="post__center">
        <div className="center__container">
          <NavLink
            //need to pass in ID then pull that info in detail
            to={{
              pathname: `/video/${_id}`,
              info: { props },
            }}
          >
            {" "}
            <span className="post__hover">Watch</span>
            <img src={image} />
          </NavLink>
        </div>
      </div>
      <div className="post__left">
        <NavLink
          className="post__title"
          //need to pass in ID then pull that info in detail
          to={{
            pathname: `/video/${_id}`,
            info: { props },
          }}
        >
          <a> {text} </a>
        </NavLink>
        <div className="left__timeHash">
          {/*} <span className="post__timeStamp">{timeStamp}</span> */}
          <HashtagComponent
            hashTag={hashtag}
            hashTagURL={hashtag}
            info={props.comment}
          />
        </div>
        <SubmittedByComponent
          commentAuthor={commentAuthor}
          info={props.comment}
        />
      </div>
    </div>
  );
};

export default PostItem;

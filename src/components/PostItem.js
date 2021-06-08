import React, { useState, useEffect } from "react";
import "./css/PostItem.css";
import { Link, useParams } from "react-router-dom";
import utils from "../utils/utils";
import HashtagComponent from "./common/HashtagComponent";
import SubmittedByComponent from "./common/SubmittedByComponent";

const PostItem = (props) => {
  const { hashtag, text, upvote, image, commentAuthor, _id } = props.post;

  // let { title } = useParams();

  // console.log(title);

  const { hashTag, title, timeStamp } = utils.cleanText(text);

  console.log(hashTag, title, timeStamp);

  return (
    <div className="post">
      <div className="post__left">
        <span className="post__timeStamp">{timeStamp}</span>
        <span className="post__title"> {title} </span>
        <HashtagComponent hashTag={hashTag} hashTagURL={hashtag} info={props} />
        <SubmittedByComponent commentAuthor={commentAuthor} info={props} />
      </div>
      <div className="post__center">
        <div className="center__container">
          <Link
            //need to pass in ID then pull that info in detail
            to={{
              pathname: `/video/${_id}`,
              info: { props },
            }}
          >
            {" "}
            <span className="post__hover">Watch</span>
            <img src={image} />
          </Link>
        </div>
        <span className="post__upVote">{upvote}</span>
      </div>
    </div>
  );
};

export default PostItem;

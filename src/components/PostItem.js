import React, { useState, useEffect } from "react";
import "./css/PostItem.css";
import { Link, useParams } from "react-router-dom";

export default function PostItem(props) {
  const { text, upvote, image, commentAuthor, timeStamp, hashtag, url, _id } =
    props.post;

  console.log(props);

  let { title } = useParams();

  console.log(title);

  return (
    <div className="post">
      <div className="post__left">
        <span className="post__title">
          {text}{" "}
          {/*
            <span className="post__timeStamp">{timeStamp}</span>
          <Link
            to={{
              pathname: `/filter/hashtag/${hashtag}`,
              info: { props },
            }}
          >
            <span className="post__hashTag">#{hashtag}</span>
          </Link>
          */}
        </span>

        <span className="post__info">
          submitted by
          <Link
            to={{
              pathname: `/filter/user/${commentAuthor}`,
              info: { props },
            }}
          >
            {commentAuthor}
          </Link>
        </span>
      </div>
      <div className="post__center">
        <Link
          //need to pass in ID then pull that info in detail
          to={{
            pathname: `/video/${_id}`,
            info: { props },
          }}
        >
          {" "}
          <img src={image} />
        </Link>

        <span className="post__upVote">{upvote}</span>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./css/PostItem.css";
import { NavLink, useParams } from "react-router-dom";
import utils from "../utils/utils";
import HashtagComponent from "./common/HashtagComponent";
import SubmittedByComponent from "./common/SubmittedByComponent";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Votes = (props) => {
  console.log(props.info);
  const { upvote, _id } = props.info;
  const [votes, setVotes] = useState(upvote);

  const _onClick = () => {
    const mutations = [
      {
        patch: {
          id: _id,
          inc: {
            upvote: 1,
          },
        },
      },
    ];
    fetch(
      `https://${process.env.REACT_APP_PROJECT_ID}.api.sanity.io/v1/data/mutate/${process.env.REACT_APP_DATASET}`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
        body: JSON.stringify({ mutations }),
      }
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
    setVotes((prevCount) => prevCount + 1);
  };

  return (
    <div className="post__upVote" onClick={_onClick}>
      {votes}
      <FontAwesomeIcon className="upVote__heart" icon={faHeart} />
    </div>
  );
};

const PostItem = (props) => {
  console.log(props);
  const { hashtag, text, image, commentAuthor, _id } = props.comment;

  const { hashTag, title, timeStamp } = utils.cleanText(text);

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
          <a> {title} </a>
        </NavLink>
        <div className="left__timeHash">
          {/*} <span className="post__timeStamp">{timeStamp}</span> */}
          <HashtagComponent
            hashTag={hashTag}
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

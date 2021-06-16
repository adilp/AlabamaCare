import React, { useState, useEffect } from "react";
import "./css/PostItem.css";
import { Link, useParams } from "react-router-dom";
import utils from "../utils/utils";
import HashtagComponent from "./common/HashtagComponent";
import SubmittedByComponent from "./common/SubmittedByComponent";

const Votes = (props) => {
  const { upvote, _id } = props;
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
    <div className="post__upVote">
      <button onClick={_onClick}>↑</button>
      {votes}
    </div>
  );
};

const PostItem = (props) => {
  console.log(props);
  const { hashtag, text, image, commentAuthor, _id } = props;

  const { hashTag, title, timeStamp } = utils.cleanText(text);

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
        <Votes {...props} />
      </div>
    </div>
  );
};

export default PostItem;

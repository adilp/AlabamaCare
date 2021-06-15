import React, { useState, useEffect } from "react";
import "./css/PostItem.css";
import { Link, useParams } from "react-router-dom";
import utils from "../utils/utils";
import HashtagComponent from "./common/HashtagComponent";
import SubmittedByComponent from "./common/SubmittedByComponent";

const Votes = (props) => {
  console.log(props);
  const { upvote, _id } = props;
  const [votes, setVotes] = useState(upvote);

  // useEffect(() => {
  //   const mutations = [
  //     {
  //       patch: {
  //         id: _id,
  //         inc: {
  //           upvote: 1,
  //         },
  //       },
  //     },
  //   ];
  //   console.log(
  //     process.env.REACT_APP_PROJECT_ID,
  //     process.env.REACT_APP_DATASET,
  //     process.env.REACT_APP_TOKEN
  //   );
  //   console.log("upvote");
  //   // fetch(
  //   //   `https://${process.env.REACT_APP_PROJECT_ID}.api.sanity.io/v1/data/mutate/${process.env.REACT_APP_DATASET}`,
  //   //   {
  //   //     method: "post",
  //   //     headers: {
  //   //       "Content-type": "application/json",
  //   //       Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  //   //     },
  //   //     body: JSON.stringify({ mutations }),
  //   //   }
  //   // )
  //   //   .then((response) => response.json())
  //   //   .then((result) => console.log(result))
  //   //   .catch((error) => console.error(error));
  // }, [upvote]);

  // useEffect(() => {
  //   setVotes(upvote);
  // }, [votes]);

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
    console.log("upvote");
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
    <div className="QuestionPage__votes-count">
      <button onClick={_onClick}>↑</button>
      {votes}
    </div>
  );
};

const PostItem = (props) => {
  console.log(props);
  const { hashtag, text, upvote, image, commentAuthor, _id } = props;

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
        {/*<span className="post__upVote">65</span>*/}
      </div>
    </div>
  );
};

export default PostItem;

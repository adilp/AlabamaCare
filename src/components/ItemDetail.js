import "./css/ItemDetail.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import ReactPlayer from "react-player";
import Posts from "./Posts";
import sanityClient from "../utils/client";
import { useParams } from "react-router-dom";
import utils from "../utils/utils";
import HashtagComponent from "./common/HashtagComponent";
import SubmittedByComponent from "./common/SubmittedByComponent";

const ItemDetail = (props = null) => {
  let { title } = useParams();
  let querry = `_type == "comment" && _id == "${title}"`;
  let data;
  const [videoData, setvideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`*[${querry}]`)
      .then((data) => {
        setvideo(data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, [querry]);

  if (videoData) {
    let { text, commentAuthor, url, upvote, video, hashtag } = videoData[0];
    //console.log(videoData[0]);
    const { hashTag, timeStamp, title } = utils.cleanText(text);

    data = (
      <div>
        <div className="itemDetail__container">
          <div className="itemDetail__postinfo">
            <span className="postinfo__timestamp">{timeStamp} </span>
            <span className="postinfo__title">{title} </span>
            <HashtagComponent
              hashTag={hashTag}
              hashTagURL={hashtag}
              info={props}
            />
          </div>
          <SubmittedByComponent commentAuthor={commentAuthor} info={props} />
          <div className="app__videos">
            <ReactPlayer
              className="video__player"
              playing={false}
              controls
              width="100%"
              height="100%"
              url={url}
            />
          </div>
          <span className="postinfo__upvote">{upvote}</span>
        </div>
        <div className="itemDetail__related">
          <span>Related: </span>
          <Posts videoFeed={video} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      {isLoading ? "...loading" : <div>{data}</div>}
    </div>
  );
};

export default ItemDetail;

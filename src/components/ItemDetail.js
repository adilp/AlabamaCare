import "./css/ItemDetail.css";
import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Header from "./Header";
import ReactPlayer from "react-player";
import Posts from "./Posts";
import sanityClient from "../utils/client";
import { useParams, useLocation } from "react-router-dom";
import utils from "../utils/utils";
import HashtagComponent from "./common/HashtagComponent";
import SubmittedByComponent from "./common/SubmittedByComponent";
import Votes from "./common/Votes";
import constants from "../utils/constants";

const ItemDetail = (props = null) => {
  const { URL } = constants;
  let { title } = useParams();
  const location = useLocation();
  const path = `${URL}${location.pathname}`;
  let querry = `_type == "comment" && _id == "${title}"`;
  let data;
  const [videoData, setvideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

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
    let { text, commentAuthor, url, video, hashtag } = videoData[0];
    const { hashTag, title } = utils.cleanText(text);

    data = (
      <div>
        <div className="itemDetail__container">
          <div className="itemDetail__postinfo">
            {/* <span className="postinfo__timestamp">{timeStamp} </span> */}
            <span className="postinfo__title">{title} </span>
            <HashtagComponent
              hashTag={hashTag}
              hashTagURL={hashtag}
              info={props}
            />
          </div>
          <SubmittedByComponent commentAuthor={commentAuthor} info={props} />
          <CopyToClipboard text={path} onCopy={onCopyText}>
            <div className="copy-area">
              <button className="itemDetail__copyButton">Copy Link</button>
              {isCopied ? "Link Copied" : ""}
            </div>
          </CopyToClipboard>
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
          <Votes classStyle="itemDetail__upVote" info={videoData[0]} />
        </div>
        <div className="itemDetail__related">
          <span>More from this broadcast: </span>
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

import "./css/ItemDetail.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import ReactPlayer from "react-player";
import Posts from "./Posts";
import sanityClient from "../client";
import { useParams } from "react-router-dom";

export default function ItemDetail(props = null) {
  let { title } = useParams();
  console.log(title);
  let querry;
  let data;
  const [videoData, setvideo] = useState(null);

  querry = `_type == "comment" && _id == "${title}"`;
  console.log(querry);

  useEffect(() => {
    sanityClient
      .fetch(`*[${querry}]`)
      .then((data) => setvideo(data))
      .catch(console.error);
  }, [querry]);

  console.log(videoData);

  // if (!props.post) {
  //   querry = `_type == "comment" && video == "${}"`;
  // }

  //const videoUrl = `youtube.com/watch?v=${url}`;

  if (videoData) {
    console.log(videoData[0].timeStamp);
    data = (
      <div>
        <div className="itemDetail__container">
          <div className="itemDetail__postinfo">
            <span className="postinfo__timestamp">
              {videoData[0].timeStamp}{" "}
            </span>
            <span className="postinfo__title">{videoData[0].text} </span>
            <span className="postinfo__hashTags">{videoData[0].hashtag} </span>
          </div>
          <span className="postinfo__user">
            submitted by: <a>{videoData[0].commentAuthor}</a>
          </span>
          <div className="app__videos">
            <ReactPlayer
              className="video__player"
              playing={false}
              controls
              width="100%"
              height="100%"
              url={videoData[0].url}
            />
          </div>
          <span className="postinfo__upvote">{videoData[0].upvote}</span>
        </div>
        <div className="itemDetail__related">
          <span>Related: </span>
          <Posts videoFeed={videoData[0].video} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div>{data}</div>
    </div>
  );
}

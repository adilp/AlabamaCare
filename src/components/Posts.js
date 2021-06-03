import React, { useState, useEffect } from "react";
import PostItem from "./PostItem";
import "./css/Posts.css";
import sanityClient from "../client";

export default function Posts(props) {
  const [videoData, setvideo] = useState(null);
  let querry = '_type == "comment"';
  console.log(props);

  if (props.videoFeed !== "home") {
    querry = `_type == "comment" && video == "${props.videoFeed}"`;
    console.log(querry);
  }
  if (props.filter && props.type === "hashtag") {
    querry = `_type == "comment" && hashtag == "${props.filter}"`;
    console.log(querry);
  }

  if (props.filter && props.type === "user") {
    querry = `_type == "comment" && commentAuthor == "${props.filter}"`;
    console.log(querry);
  }

  useEffect(() => {
    sanityClient
      .fetch(`*[${querry}]`)
      .then((data) => setvideo(data))
      .catch(console.error);
  }, [querry]);

  let postDiv = <div></div>;

  if (PostItem && videoData) {
    postDiv = (
      <div className="posts">
        {videoData.map((post) => (
          <PostItem post={post} />
        ))}
      </div>
    );
  }

  console.log(videoData);
  return <div className="posts">{postDiv}</div>;
}

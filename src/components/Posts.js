import React, { useState, useEffect } from "react";
import sanityClient from "../utils/client";
import PostItem from "./PostItem";
import "./css/Posts.css";

const _filter = (props) => {
  const { videoFeed, filter, type } = props;
  if (videoFeed !== "home") {
    return `_type == "comment" && video == "${videoFeed}"`;
    //console.log(querry);
  }
  if (filter && type === "hashtag") {
    console.log("filter by hashtag");
    return `_type == "comment" && hashtag == "${filter}"`;
  }

  if (filter && type === "user") {
    console.log("FILTER BY USER");
    return `_type == "comment" && commentAuthor == "${filter}"`;
  }

  return '_type == "comment"';
};

const _randomOrder = (list) => list.sort(() => Math.random() - 0.5);

const Posts = (props) => {
  const [videoData, setvideo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let querry = _filter(props);

  useEffect(() => {
    sanityClient
      .fetch(`*[${querry}]`)
      .then((data) => {
        setvideo(data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, [querry]);

  return (
    <div className="posts">
      {isLoading
        ? "...loading"
        : _randomOrder(videoData).map((post) => (
            <PostItem key={post._id} {...post} />
          ))}
    </div>
  );
};

export default Posts;

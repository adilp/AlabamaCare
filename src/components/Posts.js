import React, { useState, useEffect } from "react";
import sanityClient from "../utils/client";
import PostItem from "./PostItem";
import "./css/Posts.css";

const _filter = (props) => {
  const { videoFeed, filter, type } = props;
  if (videoFeed !== "home") {
    return `[_type == "comment" && video == "${videoFeed}"]`;
    //console.log(querry);
  }
  if (filter && type === "hashtag") {
    console.log("filter by hashtag");
    return `[_type == "comment" && hashtag == "${filter}"]`;
  }

  if (filter && type === "user") {
    console.log("FILTER BY USER");
    return `[_type == "comment" && commentAuthor == "${filter}"]`;
  }

  if (type === "most_liked") {
    console.log("filter by most liked");
    return `[_type == "comment"] | order(upvote desc)`;
  }

  // return '[ _type == "homePage" ]{commentId-> }';
  return `[_type == "comment"]`;
};

//const _randomOrder = (list) => list.sort(() => Math.random() - 0.5);

const Posts = (props) => {
  const [videoData, setvideo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let querry = _filter(props);

  useEffect(() => {
    sanityClient
      .fetch(`*${querry}`)
      .then((data) => {
        console.log(data, querry);
        setvideo(data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, [querry]);

  return (
    <div className="posts">
      {isLoading
        ? "...loading"
        : videoData.map((post) => <PostItem key={post._id} comment={post} />)}
    </div>
  );
};

export default Posts;

import "./Main.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
// import ReactPlayer from "react-player";
import Posts from "./components/Posts";
import Header from "./components/Header";

function Main() {
  let { feed, type } = useParams();
  return (
    <div className="container">
      <Header />
      <div className="filter">
        {type && feed ? `Filter by ${type}: ${feed}` : null}
      </div>
      <Posts className="posts" videoFeed="home" filter={feed} type={type} />
    </div>
  );
}

export default Main;

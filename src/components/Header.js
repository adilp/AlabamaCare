import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Link
          className="header__link"
          to={{
            pathname: `/`,
          }}
        >
          <h1>Alabama Care</h1>
        </Link>
      </div>
      {/*
      <div className="header__right">
        <ul>
          <li>
            <a>Popular</a>
          </li>
          <li>
            <a>Popular</a>
          </li>
          <li>
            <a>Popular</a>
          </li>
        </ul>
      </div>
      */}
    </div>
  );
}

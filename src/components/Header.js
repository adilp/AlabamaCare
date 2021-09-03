import React, { useState, useEffect } from "react";
import "./css/Header.css";
import { Link, useHistory } from "react-router-dom";
import { Multiselect } from "multiselect-react-dropdown";
import sanityClient from "../utils/client";

const selectedHashtag = () => {};

export default function Header() {
  const [videoData, setvideo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`*${`[_type == "category"]`}`)
      .then((data) => {
        console.log(data);
        let flattened = [];
        // if (!props.filter && !props.type) {
        //   data.map((item) => flattened.push(item.commentId));
        //   setvideo(flattened);
        // } else {
        setvideo(data);
        // }
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  let history = useHistory();

  const handleAddrTypeChange = (e) => {
    let categoryHashtag = e[0].hashtag.substring(1);
    console.log("this is,", categoryHashtag);
    return history.push(`/filter/category/${categoryHashtag}`);
  };

  //const options = [{ name: "one" }, { name: "two" }, { name: "three" }];
  const defaultOption = videoData[0];
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
      <div className="header__right">
        <ul>
          <li>
            <Link
              className="header__link"
              to={{
                pathname: `/filter/most_liked`,
              }}
            >
              <a>Most Liked</a>
            </Link>
          </li>
          <Multiselect
            options={videoData} // Options to display in the dropdown
            // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={(e) => handleAddrTypeChange(e)} // Function will trigger on select event
            // onRemove={this.onRemove} // Function will trigger on remove event
            displayValue="hashtag" // Property name to display in the dropdown options
            singleSelect="true"
          />

          <li>
            <Link
              className="header__link"
              to={{
                pathname: `/`,
              }}
            >
              <a>Top 10</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

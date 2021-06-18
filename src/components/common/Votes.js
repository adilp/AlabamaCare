import React, { useState } from "react";
// import "../css/PostItem.css";
import "./css/Votes.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Votes = (props) => {
  //   let styleName = "post__upVote";
  let styleName = props.classStyle ? props.classStyle : "post__upVote";
  //   if (props.classStyle) {
  //     styleName = props.classStyle;
  //   }
  const { upvote, _id } = props.info;
  const [votes, setVotes] = useState(upvote);

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
    <div className={styleName} onClick={_onClick}>
      {votes}
      <FontAwesomeIcon className="upVote__heart" icon={faHeart} />
    </div>
  );
};

export default Votes;

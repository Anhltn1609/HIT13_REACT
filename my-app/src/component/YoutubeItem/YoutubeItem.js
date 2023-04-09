import React from "react";

const YoutubeItem = (props) => {
  console.log(props);
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt=""></img>
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar"></img>
        <div className="youtube-info">
          <h3 className="youtube-title">{props.title || "this is a title"}</h3>
          <h4 className="youtube-author">
            {props.author || "This is a auther name"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;

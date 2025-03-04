import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="wowen_network"
          options={{ height: 800 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/wowen_network"}
          options={{ text: "#web3 is awesome", via: "wowen_network" }}
        />
      </div>
    </div>
  );
}

export default Widgets;

import React from "react";
import "./Post.css";
const timeAgo = require("../utils/time_ago");

const Post = ({ data }) => {
  return (
    <React.Fragment>
      <section className="post__shell">
        <p className="post__author">{data.user_name}</p>
        <p className="post__title">{data.post_title}</p>
        <p className="post__content">{data.post_content}</p>

        <p className="post_time">Posted {timeAgo(data.post_date)} ago</p>
      </section>
    </React.Fragment>
  );
};

export default Post;

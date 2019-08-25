import React from "react";
import "./Post.css";
const timeAgo = require("../utils/time_ago");

const Post = ({ data }) => {
  return (
    <React.Fragment>
      <section className="post__shell">
        <div className="user__shell">
          <p className="post__author">{data.user_name}</p>
        </div>
        <div className="data__shell">
          <header className="post__header">
            <p className="post__title">{data.post_title}</p>
            <p className="post__date">Posted {timeAgo(data.post_date)} ago</p>
          </header>
          <div className="content__shell">
            <p className="post__content">{data.post_content}</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Post;

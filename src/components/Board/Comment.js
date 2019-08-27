import React from "react";
import "./Post.css";
const timeAgo = require("../../utils/time_ago");

const Post = ({ data }) => {
    return (
        <React.Fragment>
            <section className="comment__shell">
                <div className="comment__user__shell">
                    <p className="comment__author">{data.user_name}</p>
                    <p className="comment__date">{timeAgo(data.comment_date)}</p>
                </div>
                <div className="data__shell">
                    <div className="content__shell">
                        <p className="comment__content">{data.comment_content}</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Post;

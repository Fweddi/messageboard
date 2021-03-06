import React from 'react';
import '../../App.css';
import './Board.css';
import { Redirect } from "react-router-dom";
import Post from "./Post/Post";
import PostButton from "./Post/PostButton";
import SubmitPost from './Post/SubmitPost';
import Comment from "./Comment/Comment";
import CommentSection from "./Comment/CommentSection";

const Home = () => {
    const [valid, setValid] = React.useState(true);
    const [posts, setPosts] = React.useState(null);
    const [comments, setComments] = React.useState(null);
    const [user_id, setUser_id] = React.useState(null);
    const [update, setUpdate] = React.useState(false);
    const [clickPost, setClickPost] = React.useState(false);

    React.useEffect(() => {
        fetch('/api/cookie-check')
            .then(res => res.json())
            .then(res => {
                if (res) {
                    setValid(true);
                    setUser_id(parseInt(res, 10));
                } else {
                    setValid(false);
                }
            })
            .catch(err => {
                console.error(err);
                setValid(false);
            });
    }, []);

    React.useEffect(() => {
        fetch('/api/select-messages')
            .then(res => res.json())
            .then(res => setPosts(res))
            .catch(err => console.error(err));
    }, [update]);

    React.useEffect(() => {
        fetch('/api/select-comments')
            .then(res => res.json())
            .then(res => setComments(res))
            .catch(err => console.error(err));
    }, [update]);

    return (
        <React.Fragment>
            <section className="board">
                <h2 className="board__header">Message Board</h2>
                <section className="add__post__section">
                    <PostButton setClickPost={setClickPost} />
                    {clickPost ? <SubmitPost setClickPost={setClickPost} setUpdate={setUpdate} user_id={user_id} /> : null}
                </section>
                {valid ? null : <Redirect to='/' />}
                {posts && comments && valid ? posts.map((postData, i) => {
                    return (
                        <React.Fragment>
                            <Post data={postData} key={i} />
                            {comments
                                .filter(commentData => commentData.post_id === postData.id)
                                .map((commentData, j) => {
                                    return <Comment data={commentData} key={j} />
                                })}
                            <CommentSection setUpdate={setUpdate} passkey={i} post_id={postData.id} user_id={user_id} />
                        </React.Fragment>
                    )
                }) : null}
            </section>
        </React.Fragment>
    );
}

export default Home;





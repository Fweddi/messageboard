import React from 'react';
import '../App.css';
import './Board.css';
import { Redirect } from "react-router-dom";
import Post from "./Post";
import Comment from "./Comment";

const Home = () => {
    const [valid, setValid] = React.useState('TBC');
    const [posts, setPosts] = React.useState(null);
    const [comments, setComments] = React.useState(null);

    React.useEffect(() => {
        fetch('/api/cookie-check')
            .then(res => {
                console.log(res);
                res.status === 200 ? setValid(true) : setValid(false)
            })
            .catch(err => console.error(err));
    }, []);

    React.useEffect(() => {
        fetch('/api/select-messages')
            .then(res => res.json())
            .then(res => setPosts(res))
            .catch(err => console.error(err));
    }, []);

    React.useEffect(() => {
        fetch('/api/select-comments')
            .then(res => res.json())
            .then(res => setComments(res))
            .catch(err => console.error(err));
    }, []);

    return (
        <React.Fragment>
            <section className="board">
                <h2 className="board__header">Message Board</h2>
                {valid ? null : <Redirect to='/' />}
                {posts && valid ? posts.map((postData, i) => <Post data={postData} key={i} />) : null}
                {posts && comments && valid ? comments.map((commentData, i) => <Comment data={commentData} key={i} />) : null}
            </section>
        </React.Fragment>
    );
}

export default Home;





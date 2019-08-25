import React from 'react';
import '../../App.css';
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
            .then(res => res.status === 200 ? setValid(true) : setValid(false))
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
                {posts && comments && valid ? posts.map((postData, i) => {
                    return (
                        <React.Fragment>
                            <Post data={postData} key={i} />
                            {comments
                                .filter(commentData => commentData.post_id === postData.id)
                                .map((commentData, j) => <Comment data={commentData} key={j} />)}
                        </React.Fragment>
                    )
                }) : null}
            </section>
        </React.Fragment>
    );
}

export default Home;





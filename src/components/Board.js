import React from 'react';
import '../App.css';
import { Redirect } from "react-router-dom";
import Post from "./Post";

const Home = () => {
    const [valid, setValid] = React.useState('TBC');
    const [posts, setPosts] = React.useState(null);

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

    return (
        <React.Fragment>
            {valid ? null : <Redirect to='/' />}
            <main>
                {posts && valid ? posts.map((postData, i) => <Post data={postData} key={i} />) : null}
            </main >
        </React.Fragment>
    );
}

export default Home;





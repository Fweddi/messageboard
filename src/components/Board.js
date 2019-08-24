import React from 'react';
import '../App.css';
import { Redirect } from "react-router-dom";

const Home = () => {
    const [valid, setValid] = React.useState('TBC');

    React.useEffect(() => {
        console.log('About to make a fetch')
        fetch('/api/cookie-check')
            .then(res => {
                console.log(res);
                res.status === 200 ? setValid(true) : setValid(false)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <React.Fragment>
            {valid ? null : <Redirect to='/' />}
            <main>
                {valid ? <p>Board</p> : null}
            </main >
        </React.Fragment>
    );
}

export default Home;

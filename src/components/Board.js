import React from 'react';
import '../App.css';

const Home = () => {
    const [valid, setValid] = React.useState(null);

    React.useEffect(() => {
        console.log('About to make a fetch')
        fetch('/api/cookie-check')
            .then(res => {
                console.log(res)
                res.status === 200 ? setValid(true) : setValid(false)
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <main>
            <p>Board</p>
        </main >
    );
}

export default Home;

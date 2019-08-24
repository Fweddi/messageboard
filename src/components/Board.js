import React from 'react';
import '../App.css';
import { Redirect } from "react-router-dom";

const Home = () => {
    const [valid, setValid] = React.useState('TBC');
    const [posts, setPosts] = React.useState([{ post_title: '', post_content: '', post_date: '0', user_name: '' }]);

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

    const timeAgo = (date) => {
        date = parseInt(date, 10);
        console.log(date);
        let secondsDiff = Date.now() - date;
        let minutesDiff = Math.floor(secondsDiff / 60);
        let hoursDiff = Math.floor(minutesDiff / 60);
        let daysDiff = Math.floor(hoursDiff / 24);
        let monthsDiff = Math.floor(daysDiff / 30);
        let yearsDiff = Math.floor(daysDiff / 365);

        if (secondsDiff <= 60) return secondsDiff > 1 ? [secondsDiff, 'seconds'] : [secondsDiff, 'second'];
        else if (minutesDiff <= 60) return minutesDiff > 1 ? [minutesDiff, 'minutes'] : [minutesDiff, 'minute'];
        else if (hoursDiff <= 60) return hoursDiff > 1 ? [hoursDiff, 'hours'] : [hoursDiff, 'hour'];
        else if (daysDiff <= 30) return daysDiff > 1 ? [daysDiff, 'days'] : [daysDiff, 'day'];
        else if (monthsDiff <= 12) return monthsDiff > 1 ? [monthsDiff, 'months'] : [monthsDiff, 'month'];
        else return yearsDiff > 1 ? [yearsDiff, 'years'] : [yearsDiff, 'year'];
    }


    return (
        <React.Fragment>
            {valid ? null : <Redirect to='/' />}
            <main>
                {valid ? <p>Board</p> : null}
                {posts.map(post => post.post_title)}
                {posts.map(post => post.post_content)}
                {posts.map(post => post.user_name)}

                {posts.map(post => timeAgo(post.post_date))}
            </main >

        </React.Fragment>
    );
}

export default Home;

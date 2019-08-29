import React from 'react';

const PostButton = (props) => {
    const handleClick = () => {
        props.setClickPost(prevState => !prevState)
    }

    return (
        <React.Fragment>
            <button className="button__post" onClick={handleClick}><div className="post__plus">+</div> Add new post</button>
        </React.Fragment>
    )
}

export default PostButton;
import React from 'react';

const CommentButton = (props) => {
    const handleClick = () => {
        props.setClick(prevState => !prevState)
    }

    return (
        <React.Fragment>
            <button className="button__comment" onClick={handleClick}>Comment</button>
        </React.Fragment>
    )
}

export default CommentButton;
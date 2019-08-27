import React from 'react';

const CommentButton = (props) => {
    const handleClick = () => {
        props.setClickComment(prevState => !prevState)
    }

    return (
        <React.Fragment>
            <button className="button__comment" onClick={handleClick}><div className="comment__plus">+</div>Add new comment</button>
        </React.Fragment>
    )
}

export default CommentButton;
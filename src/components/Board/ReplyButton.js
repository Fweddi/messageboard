import React from 'react';

const ReplyButton = (props) => {
    const handleClick = () => {
        props.setState(prevState => !prevState)
    }

    return (
        <React.Fragment>
            <button className="button__reply" onClick={handleClick}>Reply</button>
        </React.Fragment>
    )
}

export default ReplyButton;
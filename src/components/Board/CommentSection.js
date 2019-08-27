import React from 'react';
import CommentButton from './CommentButton';
import SubmitComment from './SubmitComment';

const CommentSection = ({ passkey, post_id, user_id, setUpdate }) => {

    const [clickComment, setClickComment] = React.useState(false);

    return (
        <section className="comment__section">
            <CommentButton key={passkey} setClickComment={setClickComment} />
            {clickComment ? <SubmitComment setClickComment={setClickComment} setUpdate={setUpdate} post_id={post_id} user_id={user_id} /> : null}
        </section>
    )
}

export default CommentSection;
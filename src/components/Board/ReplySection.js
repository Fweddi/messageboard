import React from 'react';
import CommentButton from './CommentButton';
import SubmitComment from './SubmitComment';

const ReplySection = ({ passkey, post_id, user_id, setUpdate }) => {

    const [click, setClick] = React.useState(false);

    return (
        <section className="reply__section">
            <CommentButton key={passkey} setClick={setClick} />
            {click ? <SubmitComment setClick={setClick} setUpdate={setUpdate} post_id={post_id} user_id={user_id} /> : null}
        </section>
    )
}

export default ReplySection;
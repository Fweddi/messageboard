import React from 'react';
import ReplyButton from './ReplyButton';
import SubmitComment from './SubmitComment';

const ReplySection = ({ passkey, post_id, user_id, setSuccess }) => {

    const [click, setClick] = React.useState(false);

    return (
        <React.Fragment>
            <ReplyButton key={passkey} setClick={setClick} />
            {click ? <SubmitComment setClick={setClick} setSuccess={setSuccess} post_id={post_id} user_id={user_id} /> : null}
        </React.Fragment>
    )
}

export default ReplySection;
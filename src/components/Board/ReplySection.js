import React from 'react';
import ReplyButton from './ReplyButton';
import SubmitComment from './SubmitComment';

const ReplySection = ({ key, post_id, user_id }) => {

    const [click, setClick] = React.useState(false);

    return (
        <React.Fragment>
            <ReplyButton key={key} setState={setClick} />
            {click ? <SubmitComment post_id={post_id} user_id={user_id} /> : null}
        </React.Fragment>
    )
}

export default ReplySection;
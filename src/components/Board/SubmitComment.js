import React from 'react';
import "../Home/Form.css";
const stringifyFormData = require('../../utils/stringify_form_data');

class SubmitComment extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { password: null, password__confirm: null, match: true, commentSubmit: 'TBC' };
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const JSONdata = stringifyFormData(data);

        console.log(JSONdata);


        fetch('/api/insert-comments', { method: 'POST', body: JSONdata, })
            .then(res => this.setState({ ['success']: res.status === 200 ? true : false }))
            .catch(error => console.error(error));
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} className="comment__form">
                    <label htmlFor="comment">Comment</label>
                    <input id="comment" name="comment" type="text" required />
                    <input id="post_id" name="post_id" type="hidden" value={this.props.post_id} />

                    <button>Reply</button>
                </form >
            </React.Fragment>
        );
    }
}


export default SubmitComment;

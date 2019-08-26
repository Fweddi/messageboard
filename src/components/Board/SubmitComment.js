import React from 'react';
import "./Register.css";
const stringifyFormData = require('../../utils/stringify_form_data');

class SubmitComment extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { password: null, password__confirm: null, match: true, commentSubmit: 'TBC' };
    }

    handleClick(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const JSONdata = stringifyFormData(data);

        fetch('/api/register-submit', { method: 'POST', body: JSONdata, })
            .then(res => this.setState({ ['success']: res.status === 200 ? true : false }))
            .catch(error => console.error(error));
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} className="comment__form">
                    <label htmlFor="comment">Comment</label>
                    <input id="comment" name="comment" type="text" onClick={handleClick} required />
                </form >
            </React.Fragment>
        );
    }
}


export default SubmitComment;

import React from 'react';
import "../../Home/Form.css";
const stringifyFormData = require('../../../utils/stringify_form_data');

class SubmitPost extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.setClickPost(prevState => !prevState);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const JSONdata = stringifyFormData(data);

        fetch('/api/insert-post', { method: 'POST', body: JSONdata, })
            .then(res => {
                this.props.setUpdate(prevState => res.status === 200 ? !prevState : prevState);
                this.props.setClickPost(prevState => !prevState);
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} className="comment__form">
                    <div className="title">
                        <label className="title-label" htmlFor="post_title">Title:</label>
                        <input id="post_title" name="post_title" maxLength="30" />
                    </div>
                    <label className="hidden-label" htmlFor="post_content">Add post content here:</label>
                    <textarea id="post_content" name="post_content" type="text" className="form__input" required />
                    <input id="user_id" name="user_id" type="hidden" value={this.props.user_id} />
                    <div className="form__buttons">
                        <button className="form__cancel__button" type="reset" onClick={this.handleClick}>Cancel</button>
                        <button className="form__reply__button">Reply</button>
                    </div>
                </form >
            </React.Fragment>
        );
    }
}


export default SubmitPost;

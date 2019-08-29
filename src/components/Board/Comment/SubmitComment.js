import React from 'react';
import "../../Home/Form.css";
const stringifyFormData = require('../../../utils/stringify_form_data');

class SubmitComment extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.setClickComment(prevState => !prevState);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const JSONdata = stringifyFormData(data);

        fetch('/api/insert-comment', { method: 'POST', body: JSONdata, })
            .then(res => {
                this.props.setUpdate(prevState => res.status === 200 ? !prevState : prevState);
                this.props.setClickComment(prevState => !prevState);
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} className="comment__form">
                    <label className="hidden-label" htmlFor="comment">Add comment content here:</label>
                    <textarea id="comment" name="comment" type="text" className="form__input" required />
                    <input id="post_id" name="post_id" type="hidden" value={this.props.post_id} />
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


export default SubmitComment;

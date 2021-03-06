import React from 'react';
import "./Form.css";
import { Redirect } from "react-router-dom";
const stringifyFormData = require('../../utils/stringify_form_data');

class Register extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { success: 'TBC' };
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const JSONdata = stringifyFormData(data);

        fetch('/api/login-submit', { method: 'POST', body: JSONdata, })
            .then(res => this.setState({ ['success']: res.status === 200 ? true : false }))
            .catch(error => console.error(error));
    }

    render() {
        return (
            <React.Fragment>
                {this.state.success === true ? <Redirect to='/board' /> : null}
                <form onSubmit={this.handleSubmit} className="login__form">
                    <h2>LOGIN</h2>
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type="text" required />

                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$' />
                    <button className="button__submit">Submit</button>
                    {this.state.success === false ? <p className="error"> Incorrect username or password! Try again. </p> : null}
                </form >
            </React.Fragment>
        );
    }
}


export default Register;

import React from 'react';
import "./Register.css"

const stringifyFormData = (fd) => {
    const data = {};
    for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
}

class Register extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const JSONdata = stringifyFormData(data);

        fetch('/api/form-submit', {
            method: 'POST',
            body: JSONdata,
        }).catch(error => console.error(error));
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <h2>REGISTER</h2>
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type="text" required />

                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" pattern='/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/' required />

                    <label htmlFor="password">Confirm Password</label>
                    <input id="password__confirm" name="password__confirm" type="password" pattern='/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/' required />

                    <button>Submit</button>
                    <p>Your password must be at least eight characters long.</p>
                    <p>It must also contain at least one uppercase letter, one lowercase letter, one number and one special character.</p>
                </form >
            </React.Fragment>
        );
    }
}

export default Register;

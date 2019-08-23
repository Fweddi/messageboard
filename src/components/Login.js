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

        fetch('/api/login-submit', {
            method: 'POST',
            body: JSONdata,
        }).catch(error => console.error(error));
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} class="login__form">
                    <h2>LOGIN</h2>
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type="text" required />

                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$' />
                    <button>Submit</button>
                </form >
            </React.Fragment>
        );
    }
}


export default Register;
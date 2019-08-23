import React from 'react';
import "./Register.css";
const stringifyFormData = require('../utils/stringify_form_data');

class Register extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.state = { password: null, password__confirm: null, match: true, success: 'TBC' };
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleBlur() {
        if (this.state.password === this.state.password__confirm) {
            this.setState({ ['match']: true })
        } else {
            this.setState({ ['match']: false })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const JSONdata = stringifyFormData(data);

        fetch('/api/register-submit', { method: 'POST', body: JSONdata, })
            .then(res => this.setState({ ['success']: res.status === 302 ? true : false }))
            .then(() => console.log(this.state))
            .catch(error => console.error(error));
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} className="register__form">
                    <h2>REGISTER</h2>
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type="text" required />

                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$' value={this.state.value} onChange={this.handleChange} required />

                    <label htmlFor="password">Confirm Password</label>
                    <input id="password__confirm" name="password__confirm" type="password" pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$' value={this.state.value} onChange={this.handleChange} onBlur={this.handleBlur} required />
                    {!this.state.match ? <div className="match"> Passwords must match! </div> : <button>Submit</button>}
                    {this.state.success === false ? <p class="error"> User already taken! Try another username. </p> : null}
                    <p>Your password must be at least eight characters long.</p>
                    <p>It must also contain at least one uppercase letter, one lowercase letter, one number and one special character.</p>
                </form >
            </React.Fragment>
        );
    }
}


export default Register;

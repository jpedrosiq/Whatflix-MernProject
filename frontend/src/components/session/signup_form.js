import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./signup_form.css";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/browse');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.signup(user, this.props.history);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <div className="nav-bar">
                    <Link to="/">
                        <img src="https://i.imgur.com/HLCwM97.png" alt="logo"/>
                    </Link>
                </div>
                <div className="signup-form-container" >
                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        <div className="signup-form">
                            <br />
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                                className="signup-input"
                            />
                            <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                                className="signup-input"
                            />
                            <br />
                            <input type="submit" value="Submit" className="btn-nav-submit"/>
                            {this.renderErrors()}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignupForm);
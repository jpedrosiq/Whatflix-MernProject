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
                    <li key={`error-${i}`} style={{ color:"red", listStyle:"none" }}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="showcase-box-signup">
                <div className="poster-img">
                    <img src="https://i.imgur.com/u1c7OSV.jpg" height="537px" width="400px" alt="pulp-fiction"/>
                </div>
                <div className="signup-form-container" >
                    <div className="signup-topics">
                        <ul className="list-topics">
                            <li>Find the newest films to watch</li>
                            <li>Keep track of all your favorite movies</li>
                            <li>And search for new ones</li>
                        </ul>
                    </div>
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
                            <input type="submit" value="SIGN UP!" className="btn-nav-submit"/>
                            {this.renderErrors()}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignupForm);
import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: props.errors,
        };
        props.clearErrors();
        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }
    handleLogIn(e) {
        e.preventDefault();
        this.setState(this.state);
        this.props.login(this.state)
            .then(() => this.props.history.push('/'));
    }
    handleSignUp(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push('/'));
    }
    handleDemo(e) {
        e.preventDefault();
        this.state = {
            username: 'Demo',
            password: '123456',
        };
        this.props.login(this.state)
            .then(() => this.props.history.push('/'));
    }
    render() {
        const { errors, formType } = this.props;
        let errorList, errorUl, email, button;
        if (errors.length > 0) {
            errorList = this.props.errors.map(error => (
                <li key={error}>{error}</li>
            ));
            errorUl = <ul>{errorList}</ul>;
        }
        if (formType == "Sign Up") {
            email = <label>
                        Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput("email")} /><br/>
                    </label>;
            button = <button className="green-btn" onClick={this.handleSignUp}>Sign Up!</button>;
        }
        else {
            button = <button className="green-btn" onClick={this.handleLogIn}>Log In!</button>
        }
        return (
            <div className="sessionform">
                <div className="sessionform-image"></div>
                <div className="sessionform-text">
                    <h2>Welcome to Rock On</h2>
                    <form>
                        <label>
                            Username:
                            <input required type="text" value={this.state.username} onChange={this.handleInput('username')} />
                        </label>
                        <br />
                        {email}
                        <label>Password:
                            <input required type="password" value={this.state.password} onChange={this.handleInput('password')} />
                        </label>
                        <br />
                        {button}
                        <button className="button" onClick={this.handleDemo}>Demo Login</button>
                    </form>
                    <div className="sessionform-errors">{errorUl}</div>
                </div>
            </div>
        );
    }
}

export default SessionForm;

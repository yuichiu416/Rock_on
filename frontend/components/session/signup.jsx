import React, { Component } from 'react';

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errors:  props.errors,
        };
        props.clearErrors();
        this.handleDemo = this.handleDemo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.target.value});
        };
    }

    handleSubmit(e){
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
        const { errors } = this.props;
        let errorList, errorUl;
        if (errors.length > 0) {
            errorList = this.props.errors.map(error => (
                <li key={error}>{error}</li>
            ));
            errorUl = <ul>{errorList}</ul>;
        }
        return (
            <div className="session-form">
                <form>
                    <h2>Sign Up!</h2>
                    <label>
                        Username:
                        <input type="text" value={this.state.username} onChange={this.handleInput("username")} />
                    </label>
                    <label>
                        Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up!</button>
                    <button onClick={this.handleDemo}>Demo Login</button>
                </form>
                <ul>{errorUl}</ul>
            </div>
        )
    }
}

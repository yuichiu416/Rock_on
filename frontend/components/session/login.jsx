import React from 'react';
import { receiveErrors } from '../../actions/session';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }
    
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/'), err => alert(err.responseText));
    }
    handleDemo(e){
        e.preventDefault();
        this.state = {
            username: 'Demo',
            password: '123456',
        };
        this.props.login(this.state)
            .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div className="session-form">
                <h2>Log In!</h2>
                <form>
                    <label>
                        Username:
                        <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
                    </label>

                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                        <button onClick={this.handleSubmit}>Log In!</button>
                        <button onClick={this.handleDemo}>Demo Login</button>
                </form>
            </div>
        );
    }
}

export default Login;

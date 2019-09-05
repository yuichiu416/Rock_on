import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors:  props.errors,
        };
        props.clearErrors();
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
        console.log(this.state);
    debugger;
        this.setState(this.state);
        this.props.login(this.state)
            .then(() => this.props.history.push('/'));
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
        const {errors} = this.props;
        let errorList, errorUl;
        if(errors.length > 0){
            errorList = this.props.errors.map(error => (
                <li key={error}>{error}</li>
            ));
            errorUl = <ul>{errorList}</ul>;
        }
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
                    <ul>{errorUl}</ul>
                </form>
            </div>
        );
    }
}

export default Login;

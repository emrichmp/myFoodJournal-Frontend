import React from 'react';

class LoginForm extends React.Component {

    submitHandler = (event) => {
        event.preventDefault()
        console.log("login button")
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render () {
      return (
        <div className="login">
            <h1 className="Header">Login!</h1>
            <form onSubmit= {this.submitHandler} className="login">
                <label>
                    Email:
                    <input className="login-input" type="text" name="email" placeholder="email@gmail.com" onChange={this.changeHandler} />
                </label>
                <label>
                    Password:
                    <input className="login-input" type="password" name="password" placeholder="password" onChange={this.changeHandler} />
                </label>
                <input className="login-button" type="submit" value="Login" />
            </form>
        </div>
      );
    }
  }
    
export default LoginForm;
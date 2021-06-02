import React from 'react';

class LoginForm extends React.Component {

    state = {
        email: "",
        password: "",
        error: ""
    }

    submitHandler = (event) => {
        event.preventDefault()
        let password = this.state.password
        let email = this.state.email
        this.fetchHandler(email, password)
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    fetchHandler(email, password) {
        fetch("http://localhost:3000/api/v1/sessions", {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                    email: email,
                    password: password,
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data === "problem"){
                this.setState({
                    error: "email or password is incorrect!"
                })
            } else {
                console.log(data)
                //this.loginHandler(data)
            }
        })
    }

    loginHandler(data) {
        //start session here!
        return window.user_id = data
        //console.log(window.user_id)
    }

    render () {
      return (
        <div className="login">
            <h1 className="Header">Login!</h1>
            <form onSubmit= {this.submitHandler} className="login">
                <h2 className="error">{this.state.error}</h2>
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
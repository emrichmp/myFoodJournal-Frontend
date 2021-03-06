import React from 'react';

import { connect } from "react-redux"

class LoginForm extends React.Component {

    state = {
        email: "",
        password: "",
        error: ""
    }

    submitHandler = (event) => {
        event.preventDefault()
        const password = this.state.password
        const email = this.state.email
        // this.setState({
        //  email: ""
        // })
        // console.log(this.state.email)
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
                this.loginHandler(data)
            }
        })
    }

    loginHandler(data) {
        localStorage.setItem('user', data);
        this.props.dispatch({ type: "LOGIN" });
    }

    render () {
      return (
        <div className="login">
            <h1 className="Header">Login!</h1>
            <form onSubmit= {this.submitHandler} className="login">
                <h2 className="error">{this.state.error}</h2>
                <label>
                    Email:
                    <input className="login-input" type="text" name="email" placeholder="email@gmail.com" onChange={this.changeHandler} value={this.state.email} />
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

  const mapStateToProps = state => ({
      loggedIn: state.loggedIn
  })
    
export default connect(mapStateToProps)(LoginForm);
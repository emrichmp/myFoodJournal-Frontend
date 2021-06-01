import React from 'react';

class LoginForm extends React.Component {

    submitHandler = (event) => {
        event.preventDefault()
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
            <form onSubmit= {this.submitHandler} className="">
                <label>
                    Email:
                    <input className="" type="text" name="email" placeholder="email@gmail.com" onChange={this.changeHandler} />
                </label>
                <label>
                    Password:
                    <input className="" type="password" name="password" placeholder="password" onChange={this.changeHandler} />
                </label>
                <input type="submit" value="Login" />
            </form>
        </div>
      );
    }
  }
    
export default LoginForm;
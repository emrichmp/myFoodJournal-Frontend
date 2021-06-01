import React from 'react';

class SignUpForm extends React.Component {

    submitHandler = (event) => {
        event.preventDefault()
        console.log("signup button")
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render () {
        return (
          <div className="signup">
              <h1 className="Header">Sign Up!</h1>
              <form onSubmit= {this.submitHandler} className="signup">
                  <label>
                      Email:
                      <input className="signup-input" type="text" name="email" placeholder="email@gmail.com" onChange={this.changeHandler} />
                  </label>
                  <label>
                      Password:
                      <input className="signup-input" type="password" name="password" placeholder="password" onChange={this.changeHandler} />
                  </label>
                  <label>
                      Confirm Password:
                      <input className="signup-input" type="password" name="confirm" placeholder="confirm password" onChange={this.changeHandler} />
                  </label>
                  <input className="signup-button" type="submit" value="Sign up!" />
              </form>
          </div>
        );
      }
    }
    
export default SignUpForm;
import React from 'react';

class SignUpForm extends React.Component {
    render () {
        return (
          <div className="sign-up">
              <h1 className="Header">Sign Up!</h1>
              <form onSubmit= {this.submitHandler} className="">
                  <label>
                      Email:
                      <input className="" type="text" name="email" placeholder="email@gmail.com" onChange={this.changeHandler} />
                  </label>
                  <label>
                      Password:
                      <input className="" type="password" name="password" placeholder="password" onChange={this.changeHandler} />
                  </label>
                  <label>
                      Confirm Password:
                      <input className="" type="password" name="confirm" placeholder="password" onChange={this.changeHandler} />
                  </label>
                  <input type="submit" value="Login" />
              </form>
          </div>
        );
      }
    }
    
export default SignUpForm;
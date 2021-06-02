import React from 'react';

class SignUpForm extends React.Component {
    state = {
        email: "",
        password: "",
        confirm: "",
        error: ""
    }

    submitHandler = (event) => {
        event.preventDefault()
        if (this.state.password === this.state.confirm){
            let email = this.state.email
            let password = this.state.password
            let weight = this.state.weight
            this.postHandler(email, password, weight)
        } else {
            this.setState({
                error: "Passwords do not match!"
            })
        }
    }

    postHandler(email, password, weight) {
        fetch("http://localhost:3000/api/v1/users", {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                    email: email,
                    password: password,
                    weight: weight
            })
        })
        .then(response => response.json())
        .then(json => console.log(json))
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
                    <h2 className="error">{this.state.error}</h2>
                  <label>
                      Password:
                      <input className="signup-input" type="password" name="password" placeholder="password" onChange={this.changeHandler} />
                  </label>
                  <label>
                      Confirm Password:
                      <input className="signup-input" type="password" name="confirm" placeholder="confirm password" onChange={this.changeHandler} />
                  </label>
                  <label>
                      Current Weight:
                      <input className="signup-input" type="text" name="weight" placeholder="kg" onChange={this.changeHandler} />
                  </label>
                  <input className="signup-button" type="submit" value="Sign up!" />
              </form>
          </div>
        );
      }
    }
    
export default SignUpForm;
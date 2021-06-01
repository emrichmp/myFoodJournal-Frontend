import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm'

class Loginpage extends React.Component {
  render () {
    return (
      <div className="Login">
          <LoginForm />
          <SignUpForm />
      </div>
    );
  }
}
  
  export default Loginpage;
  
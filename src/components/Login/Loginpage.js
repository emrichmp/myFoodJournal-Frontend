import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm'

class Loginpage extends React.Component {
  render () {
    return (
      <div>
          <LoginForm />
          <SignUpForm />
      </div>
    );
  }
}
  
  export default Loginpage;
  
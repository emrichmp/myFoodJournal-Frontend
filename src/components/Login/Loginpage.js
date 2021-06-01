import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm'

class Loginpage extends React.Component {
  render () {
    return (
      <div>
        <h1 className="Header">Welcome to myFoodJournal!</h1>
        <h6 className="tdee-form">If you already have an account please login in the form below! If this is your first time with us please Sign up using the second form!</h6>
          <LoginForm />
          <SignUpForm />
      </div>
    );
  }
}
  
  export default Loginpage;
  
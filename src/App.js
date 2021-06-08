//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {
  Route,
  HashRouter
} from "react-router-dom";
import Tdee from "./components/Tdee"
import Mydiary from './components/myDiary/MyDiary';
import Mygoals from './components/myGoals/myGoals';
import myHistory from './components/myHistory/myHistory';
import Loginpage from './components/Login/Loginpage';
import Logout from './components/Logout';

import { connect } from "react-redux"

class App extends React.Component {

  render () {
    if (this.props.loggedIn === true) {
    return (
            <div className="App">
              <HashRouter>
                <Navbar />
                <div className="content">
                  <Route exact path="/tdee" component={Tdee}/>
                  <Route exact path="/" component={Mydiary}/>
                  <Route exact path="/myGoals" component={Mygoals}/>
                  <Route exact path="/myHistory" component={myHistory}/>
                  <Route exact path="/logout" component={Logout} />
                </div>
              </HashRouter>
            </div>
          );
    } else {
      return (
          <Loginpage />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn
})

export default connect(mapStateToProps)(App);

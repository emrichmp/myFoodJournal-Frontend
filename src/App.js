//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {
  Route,
  HashRouter
} from "react-router-dom";
import Tdee from "./components/Tdee"
import Mydiary from './components/myDiary/myDiary';
import Mygoals from './components/myGoals/myGoals';
import myHistory from './components/myHistory';
import Loginpage from './components/Login/Loginpage';

class App extends React.Component {

  state = {
    loggedIn: false
  }

  render () {
    if (this.state.loggedIn === true) {
    return (
            <div className="App">
              <HashRouter>
                <Navbar />
                <div className="content">
                  <Route exact path="/tdee" component={Tdee}/>
                  <Route exact path="/myDiary" component={Mydiary}/>
                  <Route exact path="/myGoals" component={Mygoals}/>
                  <Route exact path="/myHistory" component={myHistory}/>
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

export default App;

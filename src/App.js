//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {
  Route,
  HashRouter
} from "react-router-dom";
import Tdee from "./components/Tdee/Tdee"
import Mydiary from './components/myDiary/MyDiary';
import Mygoals from './components/myGoals/myGoals';
import myHistory from './components/myHistory/myHistory';
import Loginpage from './components/Login/Loginpage';
import Logout from './components/Logout';
import { fetchData } from './components/actions/fetchData';

//import Assessment from './components/Assessment';

import { connect } from "react-redux"

class App extends React.Component {

  handleOnClick(){
    this.props.fetchData()
  }
  //Using <HashRouter> b/c according to router doc, it doesn't require special server config

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

//<Route exact path="/livecode" component={Assessment}/>

//const food = this.props.food

/* <button className="button" onClick={(event) => this.handleOnClick(event)}>Random Food Pic</button>
                  <p className="disclaimer">{food} </p> */


function mapDispatchToProps(dispatch){
  return { fetchData: () => dispatch(fetchData())}
}

function mapStateToProps(state){
  return {food: state.food,
  loggedIn: state.loggedIn}
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);

//import logo from './logo.svg';
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

function App() {
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
}

export default App;

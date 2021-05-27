//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {
  Route,
  HashRouter
} from "react-router-dom";
import Tdee from "./components/Tdee"
import Mydiary from './components/myDiary';
import Mygoals from './components/myGoals';
import myHistory from './components/myHistory';

window.tdee = 0
window.tdee_protein = 0
window.tdee_fats = 0
window.tdee_carbs = 0

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

//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {
  Route,
  HashRouter
} from "react-router-dom";
import Tdee from "./components/Tdee"
import Mydiary from './components/myDiary';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Mydiary />
        <div className="content">
          <Route exact path="/tdee" component={Tdee}/>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

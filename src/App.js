//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {
  Route,
  HashRouter
} from "react-router-dom";
import Tdee from "./Tdee"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <div className="content">
          <Route exact path="/tdee" component={Tdee}/>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

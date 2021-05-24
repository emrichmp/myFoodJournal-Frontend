//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Tdee from "./Tdee"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
      </HashRouter>
    </div>
  );
}

export default App;

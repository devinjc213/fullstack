import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateClimb from "./pages/CreateClimb";
import Links from "./config/Links";
import Header from "./layout/Header.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Links />
      </Router>
    </div>
  );
}

export default App;

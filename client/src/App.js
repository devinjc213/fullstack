import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateClimb from "./pages/CreateClimb";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/newclimb">Record New Climb</Link>
        <br />
        <Link to="/">Home</Link>
        <Routes>
          <Route exact path="/" exact element={<Home />} />
          <Route exact path="/newclimb" exact element={<CreateClimb />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

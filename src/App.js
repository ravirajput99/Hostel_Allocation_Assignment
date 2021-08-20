import "./App.css";

// import googlelogo from "./images/google.png";
// import facebooklogo from "./images/facebook.png";
// import { googleProvider } from "./config/authMethods";
// import socailMediaAuth from "./services/auth";
import Welcome from "./Welcome";
import NewUser from "./Hostel";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login";
import newtonlogo from "./images/newton.png";
import ChooseHostel from "./ChooseHostel";
import ChooseRoom from "./ChooseRoom";

function App() {
  return (
    <>
      <h1 className="fixed">
        <img src={newtonlogo} />
        Newton School
      </h1>
      <hr />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hostel">Hostel</Link>
            </li>
            <li>
              <Link to="/welcome">Welcome</Link>
            </li>
            <li>
              <Link to="/chooseHostel">Chooose Hostel</Link>
            </li>
            <li>
              <Link to="/room">Chooose Room</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/room">
            <ChooseRoom />
          </Route>
          <Route path="/hostel">
            <NewUser />
          </Route>
          <Route path="/welcome">
            <Welcome name="Ravi Rajput" hostelno="B4" roomno="8" />
          </Route>
          <Route path="/chooseHostel">
            <ChooseHostel />
          </Route>

          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

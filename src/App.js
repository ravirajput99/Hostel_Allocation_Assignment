import "./App.css";

// import googlelogo from "./images/google.png";
// import facebooklogo from "./images/facebook.png";
// import { googleProvider } from "./config/authMethods";
// import socailMediaAuth from "./services/auth";
import newtonlogo from "./images/newton.png";
import history from "./history";

import Routes from "./Routes";

function App() {
  return (
    <>
      <div className="fixed">
        <h1 onClick={() => history.push("/")}>
          <img src={newtonlogo} />
          Newton School
        </h1>
      </div>
      <hr />
      <Routes />
    </>
  );
}

export default App;

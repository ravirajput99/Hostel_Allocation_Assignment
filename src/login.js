import React from "react";
import googlelogo from "./images/google.png";
import facebooklogo from "./images/facebook.png";
import { googleProvider } from "./config/authMethods";
import socailMediaAuth from "./services/auth";
function handleOnClick(provider) {
  const res = socailMediaAuth(provider);
}
function Login() {
  return (
    <div className="maindiv">
      <h1>Hostel Allocation</h1>
      <p>Please sign-in:</p>
      <button
        className="googlebtn"
        onClick={() => {
          handleOnClick(googleProvider);
        }}
      >
        <img src={googlelogo} className="icon" />
        Sign in with Google
      </button>
      <button className="facebookbtn">
        <img
          src={facebooklogo}
          className="icon"
          // onClick={handleOnClick(facebookProvider)}
        />
        Sign in with Facebook
      </button>
    </div>
  );
}
export default Login;

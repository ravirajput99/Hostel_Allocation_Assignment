import React from "react";
import girl from "./images/girl.png";
import boy from "./images/boy.png";
function NewUser() {
  return (
    <div className="newUserDiv">
      <h1>Choose Your Hostel</h1>
      <div className="upperDiv">
        <div className="femaleDiv">
          <img src={girl} className="girlBoyImg" />
          <h3>Girls Hostel</h3>
        </div>
        <div className="maleDiv">
          <img src={boy} className="girlBoyImg" />
          <h3>Boys Hostel</h3>
        </div>
      </div>
    </div>
  );
}
export default NewUser;

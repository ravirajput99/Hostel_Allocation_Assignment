import React from "react";
import girl from "./images/girl.png";
import boy from "./images/boy.png";
import history from "./history";
function NewUser() {
  return (
    <div className="newUserDiv">
      <h1>Choose Your Hostel</h1>
      <div className="upperDiv">
        <div className="femaleDiv" onClick={() => history.push("/girlshostel")}>
          <img src={girl} className="girlBoyImg" />
          <h3>Girls Hostel</h3>
        </div>
        <div className="maleDiv" onClick={() => history.push("/boyshostel")}>
          <img src={boy} className="girlBoyImg" />
          <h3>Boys Hostel</h3>
        </div>
      </div>
    </div>
  );
}
export default NewUser;

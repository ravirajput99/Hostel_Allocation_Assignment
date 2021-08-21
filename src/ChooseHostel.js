import React from "react";
import history from "./history";
function ChooseHostel() {
  return (
    <div className="hostelDiv">
      <h1>Choose a Hostel</h1>
      <div onClick={() => history.push("/rooms")}>B1</div>
      <div onClick={() => history.push("/rooms")}>B2</div>
      <div onClick={() => history.push("/rooms")}>B3</div>
      <div onClick={() => history.push("/rooms")}>B4</div>
      <div onClick={() => history.push("/rooms")}>B5</div>
      <div onClick={() => history.push("/rooms")}>B6</div>
    </div>
  );
}
export default ChooseHostel;

import React from "react";
import history from "./history";
function ChooseGirlsHostel() {
  return (
    <div className="hostelDiv">
      <h1>Choose a Hostel</h1>
      <div onClick={() => history.push("/rooms")}>G1</div>
      <div onClick={() => history.push("/rooms")}>G2</div>
      <div onClick={() => history.push("/rooms")}>G3</div>
      <div onClick={() => history.push("/rooms")}>G4</div>
      <div onClick={() => history.push("/rooms")}>G5</div>
      <div onClick={() => history.push("/rooms")}>G6</div>
    </div>
  );
}
export default ChooseGirlsHostel;

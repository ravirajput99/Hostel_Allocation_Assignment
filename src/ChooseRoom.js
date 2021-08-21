import React, { useState } from "react";
import history from "./history";
function ChooseRoom() {
  function Change1() {
    let el = document.getElementById("div1");
    el.style.background = "grey";
  }
  function Change2() {
    document.getElementById("div2").style.background = "grey";
  }
  function Change3() {
    document.getElementById("div3").style.background = "grey";
  }
  function Change4() {
    document.getElementById("div4").style.background = "grey";
  }
  function Change5() {
    document.getElementById("div10").style.background = "grey";
  }
  function Change6() {
    document.getElementById("div5").style.background = "grey";
  }
  function Change7() {
    document.getElementById("div9").style.background = "grey";
  }
  function Change8() {
    document.getElementById("div8").style.background = "grey";
  }
  function Change9() {
    document.getElementById("div7").style.background = "grey";
  }
  function Change10() {
    document.getElementById("div6").style.background = "grey";
  }
  function close() {
    document.querySelector(".popupdiv").style.display = "none";
    history.push("/");
  }
  function bookRoom() {
    document.querySelector(".popupdiv").style.display = "block";
  }
  return (
    <div className="floorDiv">
      <div>
        <h3>Choose a Floor</h3>
        <select>
          <option>1st Floor</option>
          <option>2nd Floor</option>
          <option>3rd Floor</option>
          <option>4th Floor</option>
          <option>5th Floor</option>
        </select>
      </div>
      <div className="roomsDiv">
        <div onClick={() => Change1()} id="div1">
          1
        </div>
        <div onClick={() => Change2()} id="div2">
          2
        </div>
        <div onClick={() => Change3()} id="div3">
          3
        </div>
        <div onClick={() => Change4()} id="div4">
          4
        </div>
        <div onClick={() => Change5()} id="div10">
          10
        </div>
        <div className="white"></div>
        <div className="white"></div>
        <div onClick={() => Change6()} id="div5">
          5
        </div>
        <div onClick={() => Change7()} id="div9">
          9
        </div>
        <div onClick={() => Change8()} id="div8">
          8
        </div>
        <div onClick={() => Change9()} id="div7">
          7
        </div>
        <div onClick={() => Change10()} id="div6">
          6
        </div>
      </div>
      <div class="bookroom" onClick={() => bookRoom()}>
        Book Room
      </div>
      <div class="popupdiv">
        <div class="crossbutton" onClick={() => close()}>
          X
        </div>
        <h1>Success</h1>
        <br />
        <br />
        <p>Your Room is has been booked successfully.</p>
        <h3>Your room details are as follows:</h3>
        <br></br>
        <h4>
          Hostel No. <span>B4</span>
        </h4>
        <h4>
          Room No. <span>8</span>
        </h4>
      </div>
    </div>
  );
}
export default ChooseRoom;

import React from "react";

function Welcome(props) {
  // const { name, hostelno, roomno } = props;
  return (
    <div className="welcomediv">
      <h1>Welcome Ravi Rajput</h1>
      <h3>You have already booked a room</h3>
      <h2>Yor room details are as follows:</h2>
      <br />
      <h3>
        Hostel No.<span className="red">B9</span>
      </h3>
      <h3>
        Room No. <span className="red">2</span>
      </h3>
    </div>
  );
}
export default Welcome;

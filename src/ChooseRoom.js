import React from "react";
function ChooseRoom() {
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
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>10</div>
        <div className="white"></div>
        <div className="white"></div>
        <div>5</div>
        <div>9</div>
        <div>8</div>
        <div>7</div>
        <div>6</div>
      </div>
    </div>
  );
}
export default ChooseRoom;

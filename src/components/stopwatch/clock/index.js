import React, { useState } from "react";
// import "./clock.css";

function Clock() {
  const [hours, updateHours] = useState(0);
  const [minutes, updateMinutes] = useState(0);
  const [seconds, updateSeconds] = useState(0);

  setInterval(() => {
    let date = new Date();
    updateHours(date.getHours());
    updateMinutes(date.getMinutes());
    updateSeconds(date.getSeconds());
  }, 1000);

  return (
    <div>
      <h1>
        {hours && minutes && seconds
          ? `${hours}:${minutes}:${seconds}`
          : "Loading..."}
      </h1>
    </div>
  );
}

export default Clock;

import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import React, { useState } from "react";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

import "./stopwatch.css";

let timer;
function StopWatch() {
  const [pause, updatePause] = useState(false);
  // const [start, updateStart] = useState(true);
  const [secTime, updateSecTime] = useState(0);
  const [minTime, updateMinTime] = useState(0);
  const [hrsTime, updateHrsTime] = useState(0);
  let sec = secTime;
  let min = minTime;
  let hrs = hrsTime;

  function Timer() {
    sec++;
    console.log(sec);
    updateSecTime(sec);
    if (sec === 60) {
      sec = 0;
      min++;
      console.log(min);
      updateMinTime(min);
    }
    if (min === 60) {
      min = 0;
      hrs++;
      console.log(hrs);
      updateHrsTime(hrs);
      console.log("hrsUpdate", hrs);
    }
  }

  const startHandler = () => {
    updatePause(true);
    timer = setInterval(Timer, 1000);
  };

  const stopHandler = () => {
    updatePause(false);
    console.log("stopping");
    clearInterval(timer);
  };

  const resetHandler = () => {
    updatePause(false);
    clearInterval(timer);
    updateSecTime(0);
    updateMinTime(0);
    updateHrsTime(0);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>StopWatch</h1>
      <div className="App">
        <div className="Timer">
          <h1 className="Watch">
            {hrsTime}:{minTime}:{secTime}
          </h1>
        </div>
      </div>

      <div className="Time">
        {pause ? (
          <PauseCircleFilledIcon onClick={stopHandler} fontSize="large" />
        ) : (
          <PlayCircleFilledWhiteIcon
            color="primary"
            onClick={startHandler}
            fontSize="large"
          />
        )}

        <RotateLeftIcon
          color="primary"
          onClick={resetHandler}
          fontSize="large"
        />
      </div>
    </div>
  );
}

export default StopWatch;

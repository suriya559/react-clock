import React, { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import StopWatch from "./components/stopwatch";
import Clock from "./components/stopwatch/clock";

function App() {
  const [stopWatch, updateStopWatch] = useState(false);
  const [clock, updateClock] = useState(false);

  const stopHandler = () => {
    updateStopWatch(true);
    updateClock(false);
  };

  const clockHandler = () => {
    updateStopWatch(false);
    updateClock(true);
  };

  return (
    <Container maxWidth="sm">
      <h1 style={{ textAlign: "center" }}>Clock && StopWatch</h1>
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={2} style={{ textAlign: "center" }}>
          <Button variant="contained" color="primary" onClick={clockHandler}>
            Clock
          </Button>
        </Grid>
        <Grid item xs={2} style={{ textAlign: "center" }}>
          <Button variant="contained" color="secondary" onClick={stopHandler}>
            StopWatch
          </Button>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      {stopWatch && <StopWatch />}
      {clock && <Clock />}
    </Container>
  );
}

export default App;

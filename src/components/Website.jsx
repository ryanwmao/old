import React, { Component } from "react";
import "../App.css";
import Grid from "./Grid.jsx";

export default class Website extends Component {
  render() {
    return (
      <div className="Website" id="no-scrollbar">
        <Grid></Grid>
      </div>
    );
  }
}

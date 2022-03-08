import React, { Component } from "react";
import "../App.css";
import Heart from "react-heart";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      level: 0,
    };
  }

  render() {
    return (
      <div className="Heart">
        <Heart
          isActive={this.state.active}
          onClick={() =>
            this.setState({
              level: this.state.level + Math.random() * 5,
              active: this.state.level > 50,
            })
          }
        />
        <div className="heart2" isActive={this.state.active}>
          {this.state.active && (
            <span
              className="font-link"
              onClick={() =>
                this.setState({
                  level: 0,
                  active: false,
                })
              }
            >
              {" "}
              ~~ Ahjuma, Happy Valentine's Day! much love ~~{" "}
            </span>
          )}
        </div>
      </div>
    );
  }
}

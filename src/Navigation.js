import React, { Component } from "react";
import "./navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="button_move">
        <button className="nav_btn" onClick={this.props.backwardClick}>
          BACK
        </button>
        <button className="nav_btn" onClick={this.props.forwardClick}>
          NEXT
        </button>
      </div>
    );
  }
}

export default Navigation;

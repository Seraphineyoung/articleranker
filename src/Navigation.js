import React, { Component } from "react";
import "./navigation.css";
import { Button } from "react-bootstrap";

const nav_btn = {
  padding: "1rem 7rem",
  marginBottom: "1rem",
  border: "0px",
  backgroundColor: "#c3e6cb",
  color: "#155724"
};

class Navigation extends Component {
  render() {
    return (
      <div className="button_move">
        <Button
          variant="primary"
          size="lg"
          style={nav_btn}
          onClick={this.props.backwardClick}
        >
          BACK
        </Button>
        <Button
          variant="primary"
          size="lg"
          style={nav_btn}
          onClick={this.props.forwardClick}
        >
          NEXT
        </Button>
      </div>
    );
  }
}

export default Navigation;

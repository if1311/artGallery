import React from "react";
import "./Logo.css";

class Logo extends React.Component {
  render() {
    return (
      <div
        className="logo"
        style={this.props.display ? { display: "none" } : { display: "" }}
      >
        <img src="#" alt="" />
      </div>
    );
  }
}

export default Logo;

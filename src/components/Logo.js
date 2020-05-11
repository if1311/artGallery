import React from "react";
import "./Logo.css";

class Logo extends React.Component {
  render() {
    return (
      <div
        className="logo"
        style={{ display: this.props.display ? "none" : "" }}
      >
        <img src="#" alt="" />
      </div>
    );
  }
}

export default Logo;

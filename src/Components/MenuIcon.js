import React from "react";
import "./MenuIcon.css";
import Menu from "./Menu";
import Logo from "./Logo";

class MenuIcon extends React.Component {
  constructor() {
    super();
    this.state = {
      display: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickX = this.handleClickX.bind(this);
  }

  handleClick() {
    return this.setState({ display: true });
  }

  handleClickX() {
    return this.setState({ display: false });
  }

  render() {
    return (
      <div className="nav-bar">
        <Menu display={this.state.display} handleClickX={this.handleClickX} />
        <Logo display={this.state.display} />
        <div
          className="menu-icon"
          onClick={this.handleClick}
          style={this.state.display ? { display: "none" } : { display: "" }}
        >
          <div className="mob-menu1"></div>
          <div className="mob-menu2"></div>
          <div className="mob-menu3"></div>
        </div>
      </div>
    );
  }
}

export default MenuIcon;

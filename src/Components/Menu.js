import React from "react";
import "./Menu.css";
import Logo from "./Logo";

class Menu extends React.Component {
  render() {
    if (this.props.display === true) {
      return (
        <div className="menu-container">
          <div className="nav-container">
            <Logo />
            <div className="menu-icon-x" onClick={this.props.handleClickX}>
              <div className="mob-menu1-x"></div>
              <div className="mob-menu3-x"></div>
            </div>
          </div>
          <div className="menu-items">
            <h1>Home</h1>
            <h1>Gallery</h1>
            <h1>Artists</h1>
            <h1>About</h1>
            <h1>Contact</h1>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Menu;

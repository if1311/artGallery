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
            <ul>
              <li>Home</li>
              <li>Gallery</li>
              <li>Artists</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Menu;

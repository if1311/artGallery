import React from "react";
import "./Menu.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    const menuArr = ["Home", "Gallery", "Artists", "Contact"];
    const linkArr = ["/Home", "/Gallery", "/Artists", "/Contact"];

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
              {menuArr.map((item, i) => (
                <li>
                  <Link to={linkArr[i]}> {item} </Link>
                </li>
              ))}
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

import React from "react";
import "./ArtistList.css";

class ArtistDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ArtistDetails">
        <h1>{this.props.name}</h1>
        <p>
          {this.props.birth}, {this.props.death}
        </p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default ArtistDetails;

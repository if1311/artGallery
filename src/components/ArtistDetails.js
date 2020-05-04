import React from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import "./ArtistList.css";

class ArtistDetails extends React.Component {
  render() {
    return (
      <div className="ArtistDetails">
        <h1>{this.props.name}</h1>
        <p className="date">{this.props.date}</p>
      </div>
    );
  }
}

export default ArtistDetails;

import React, { Component } from "react";

import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ArtistModal from "./ArtistModal";
import axios from "axios";
import "./ArtistList.css";

export default class ArtistList2 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  closeModal = () => {
    console.log("closing modal");
    this.setState({
      isModalOpen: false,
    });
  };
  openModal = (id, name, date) => {
    console.log("opening modal");
    console.log(name, date);
    this.setState({
      isModalOpen: true,
      currentArtistID: id,
      currentArtistName: name,
      currentArtistDate: date,
      artists: [],
    });
  };
  componentDidMount() {
    axios
      .get(
        "https://api.harvardartmuseums.org/person?&size=99&apikey=912dd280-8897-11ea-953e-e1f9ff450a61&sort=objectcount&sortorder=desc&page=4"
      )
      .then((response) => {
        // console.log(response);
        response.data.records.map((record) =>
          console.log(
            `{name: "${record.displayname}", id : ${record.id}, date: "${record.displaydate}"},`
          )
        );
        this.setState({
          artists: response.data.records,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return <div></div>;
  }
}

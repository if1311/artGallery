import React from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ArtistModal from "./ArtistModal";
// import Modal from "react-modal";
import axios from "axios";
import "./ArtistList.css";

class ArtistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      isModalOpen: false,
      currentArtistID: 0,
      currentArtistName: "",
      currentArtistDate: null,
    };
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
    });
  };
  componentDidMount() {
    axios
      .get(
        "https://api.harvardartmuseums.org/person?&size=99&apikey=912dd280-8897-11ea-953e-e1f9ff450a61&sort=objectcount&sortorder=desc"
      )
      .then((response) => {
        // console.log(response);
        this.setState({
          artists: response.data.records,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const artists1 = this.state.artists.slice(0, 33);
    const artists2 = this.state.artists.slice(33, 66);
    const artists3 = this.state.artists.slice(66, 99);
    return (
      <Container>
        <h1>ARTISTS</h1>
        {/* <Modal ariaHideApp={false} isOpen={this.state.isModalOpen}>
          <div className="closemodal">
            <button onClick={this.closeModal}>X</button>
          </div>
          <ArtistPopUp />
        </Modal> */}
        <Modal
          show={this.state.isModalOpen}
          onHide={this.closeModal}
          dialogClassName="modal-detail"
          aria-labelledby="artist-details"
          scrollable={true}
        >
          <ModalHeader closeButton>
            <ModalTitle id="artist-details">Artist Details</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <ArtistModal
              currentArtistID={this.state.currentArtistID}
              currentArtistName={this.state.currentArtistName}
              currentArtistDate={this.state.currentArtistDate}
            />
          </ModalBody>
        </Modal>
        <Row className="ArtistList">
          <Col lg={4} md={4} sm={12} xs={12}>
            <ul>
              {artists1.map((artist) => {
                return (
                  <li
                    onClick={this.openModal.bind(
                      this,
                      artist.id,
                      artist.displayname,
                      artist.displaydate
                    )}
                    key={artist.id}
                  >
                    {artist.displayname}
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <ul>
              {artists2.map((artist) => {
                return (
                  <li
                    onClick={this.openModal.bind(
                      this,
                      artist.id,
                      artist.displayname,
                      artist.displaydate
                    )}
                    key={artist.id}
                  >
                    {artist.displayname}
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <ul>
              {artists3.map((artist) => {
                return (
                  <li
                    onClick={this.openModal.bind(
                      this,
                      artist.id,
                      artist.displayname,
                      artist.displaydate
                    )}
                    key={artist.id}
                  >
                    {artist.displayname}
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ArtistList;

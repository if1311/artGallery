import React from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import Media from "react-bootstrap/Media";
import Alert from "react-bootstrap/Alert";
import ArtistPopUp from "./ArtistPopUp";
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
    };
  }
  closeModal = () => {
    console.log("closing modal");
    this.setState({
      isModalOpen: false,
    });
  };
  openModal = (id) => {
    console.log("opening modal");
    console.log(id);
    this.setState({
      isModalOpen: true,
      currentArtistID: id,
    });
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response);
        this.setState({
          artists: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
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
            <ModalTitle id="artist-details">Custom Modal Styling</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <ArtistPopUp currentArtistID={this.state.currentArtistID} />
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!
            </p>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!
            </p>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!
            </p>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!
            </p>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!
            </p>
          </ModalBody>
        </Modal>
        <Row className="ArtistList">
          <Col lg={3} md={4} sm={6} xs={12}>
            <ul>
              {this.state.artists.map((artist) => {
                return (
                  <li
                    onClick={this.openModal.bind(this, artist.id)}
                    key={artist.id}
                  >
                    {artist.name}
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <ul>
              {this.state.artists.map((artist) => {
                return (
                  <li
                    onClick={this.openModal.bind(this, artist.name)}
                    key={artist.id}
                  >
                    {artist.name}
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <ul>
              {this.state.artists.map((artist) => {
                return (
                  <li
                    onClick={this.openModal.bind(this, artist.name)}
                    key={artist.id}
                  >
                    {artist.name}
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

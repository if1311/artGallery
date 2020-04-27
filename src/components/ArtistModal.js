import React from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import ArtistWorks from "./ArtistWorks";
import "./ArtistList.css";

class ArtistModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
      currentArtistID: 0,
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        // console.log(response);
        this.setState({
          works: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <Container>
        <Row className="ArtistWorks">
          <Col lg={3} md={4} sm={6} xs={12}>
            <ul>
              {this.state.works.map((work) => {
                return (
                  <li
                    {/* onClick={this.openModal.bind(this, works.id)}
                    key={works.id} */}
                  >
                    {work.url}
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

export default ArtistModal;

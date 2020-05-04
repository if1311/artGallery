import React from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import axios from "axios";
import ArtistDetails from "./ArtistDetails";
import ArtistWorks from "./ArtistWorks";
import "./ArtistList.css";

class ArtistModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.harvardartmuseums.org/object?size=30&apikey=912dd280-8897-11ea-953e-e1f9ff450a61&person=" +
          this.props.currentArtistID
      )
      .then((response) => {
        // console.log(response);
        this.setState({
          works: response.data.records,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let imageCount = 0;
    let imageHTML = this.state.works.map((work) => {
      if (work.primaryimageurl) {
        imageCount++;
        return (
          <Col key={work.id} md={3} lg={3} sm={4} xs={6}>
            <a href={work.primaryimageurl} target="_blank">
              <Image thumbnail src={work.primaryimageurl} />
            </a>
          </Col>
        );
      }
    });

    if (imageCount == 0) {
      imageHTML = (
        <Col key="c1" md={12} className="text-center text-danger h5">
          No image is available for this artist.
        </Col>
      );
    }

    return (
      <Container>
        <ArtistDetails
          name={this.props.currentArtistName}
          date={this.props.currentArtistDate}
        />
        {/* onerror="this.onerror=null;this.src='https://user-images.githubusercontent.com/3187493/80253872-1a959780-8648-11ea-826c-fc2a8b6cc082.png';" */}
        <Row className="ArtistWorks">{imageHTML}</Row>
      </Container>
    );
  }
}

export default ArtistModal;

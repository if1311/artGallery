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
      message: "Loading...",
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
    // if (this.state.works.length < 1) {
    //   imageHTML = (
    //     <Col key="c1" md={12} className="text-center text-danger h5">
    //       setTimeout(() =>{" "}
    //       {this.setState({
    //         message: "No images are available for this artist",
    //       })}
    //       , 3000);
    //     </Col>
    //   );
    // }
  }

  render() {
    let imageCount = 0;
    let imageHTML = this.state.works.map((work) => {
      if (work.primaryimageurl) {
        imageCount++;
        return (
          <Col key={work.id} md={4} lg={3} sm={6} xs={12}>
            <a href={work.primaryimageurl} target="_blank">
              <Image className="img" src={work.primaryimageurl} />
            </a>
          </Col>
        );
      }
    });

    return (
      <Container fluid>
        <ArtistDetails
          name={this.props.currentArtistName}
          date={this.props.currentArtistDate}
        />
        <Row className="ArtistWorks">{imageHTML}</Row>
      </Container>
    );
  }
}

export default ArtistModal;

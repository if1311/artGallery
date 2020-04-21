import React from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArtistWorks from "./ArtistWorks";
import ArtistDetails from "./ArtistDetails";
import "./ArtistList.css";

class ArtistPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       // console.log(response);
  //       this.setState({
  //         artists: response.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  render() {
    return (
      <Container>
        <div></div>
      </Container>
    );
  }
}

export default ArtistPopUp;

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import axios from "axios";
import ArtistDetails from "./ArtistDetails";
import "./ArtistList.css";
import Masonry from "react-masonry-css";

class ArtistModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			works: [],
			message: "",
			breakpointsColumnsObj: {
				default: 3,
				1200: 3,
				992: 2,
				768: 1,
				576: 1,
			},
		};
	}
	componentDidMount() {
		axios
			.get("https://api.harvardartmuseums.org/object?size=30&apikey=912dd280-8897-11ea-953e-e1f9ff450a61&person=" + this.props.currentArtistID)
			.then((response) => {
				console.log(response.data.records);
				response.data.records.length > 0 && response.data.records[0].images && response.data.records[0].images.length > 0
					? this.setState({
							works: response.data.records,
							message: "",
					  })
					: this.setState({
							message: "No images are available for this artist",
					  });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<Container>
				<ArtistDetails name={this.props.currentArtistName} date={this.props.currentArtistDate} />
				<Row className="ArtistWorks">
					<Col md={12} xl={12} lg={12}>
						{" "}
						{this.state.message === "" ? (
							<Masonry
								breakpointCols={this.state.breakpointsColumnsObj}
								className="artist-masonry-grid"
								columnClassName="artist-masonry-grid_column"
							>
								{this.state.works.map((work) =>
									work.primaryimageurl && work.images && work.images.length > 0 ? (
										<Container key={work.id}>
											<Row>
												<Col md={12}>
													<Image fluid className="img padded-image" src={work.primaryimageurl} />
												</Col>
											</Row>
										</Container>
									) : null
								)}
							</Masonry>
						) : (
							<h4>{this.state.message}</h4>
						)}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default ArtistModal;

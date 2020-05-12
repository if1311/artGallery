import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const GalleryItem = (props) => {
	return (
		<Container>
			<Row>
				<Col md={12}>
					<Image onClick={() => props.showImage(props.image)} id="imageId" className="padded-image" src={props.url} fluid />
					<div className="imageDetails">
						<h5>{props.image.title}</h5>
						<h6>{props.image.classification}</h6>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default GalleryItem;

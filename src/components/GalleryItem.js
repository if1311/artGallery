import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const GalleryItem = (props) => {
	return (
		<Container>
			<Row>
				<Col md={12}></Col>
				<Image onClick={() => props.showImage(props.image)} className="padded-image" src={props.url} fluid />
			</Row>
		</Container>
	);
};

export default GalleryItem;

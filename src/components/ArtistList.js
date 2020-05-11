import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ArtistModal from "./ArtistModal";
// import Modal from "react-modal";
import axios from "axios";
import "./ArtistList.css";
import styled from "styled-components";

const StyledUl = styled.ul`
	border: 0;
	list-style-type: disc;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	word-wrap: break-word;
`;

const StyledRow = styled(Row)`
	display: flex;
	flex-flow: row-reverse nowrap;
	justify-content: space-between;
`;

const PagButton = styled.button`
	border: 0;
	background-color: #ffffff;
	border-radius: 0;
	&:hover {
		color: gray;
	}
`;

class ArtistList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artists: [],
			isModalOpen: false,
			currentArtistID: 0,
			currentArtistName: "",
			currentArtistDate: null,
			next: null,
			prev: null,
		};
		this.fetchNextPage = this.fetchNextPage.bind(this);
		this.fetchPrevPage = this.fetchPrevPage.bind(this);
		this.openModal = this.openModal.bind(this);
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
	sortArtists() {}

	componentDidMount() {
		axios
			.get("https://api.harvardartmuseums.org/person?&size=60&apikey=912dd280-8897-11ea-953e-e1f9ff450a61&sort=objectcount&sortorder=desc")
			.then((response) => {
				console.log(response);
				this.setState({
					artists: response.data.records,
					next: response.data.info.next,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	fetchNextPage() {
		console.log(this.state.next);
		axios
			.get(this.state.next)
			.then((res) => res.data)
			.then((response) =>
				this.setState({
					artists: response.records,
					next: response.info.next,
					prev: response.info.prev,
				})
			);
	}
	fetchPrevPage() {
		axios
			.get(this.state.prev)
			.then((res) => res.data)
			.then((response) =>
				this.setState({
					artists: response.records,
					next: response.info.next,
					prev: response.info.prev,
				})
			);
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
						<ModalTitle id="artist-details">Artist Details</ModalTitle>
					</ModalHeader>
					<ModalBody fluid>
						<ArtistModal
							currentArtistID={this.state.currentArtistID}
							currentArtistName={this.state.currentArtistName}
							currentArtistDate={this.state.currentArtistDate}
						/>
					</ModalBody>
				</Modal>
				<Row className="ArtistList">
					<StyledUl>
						{this.state.artists
							.sort((a, b) => a.alphasort && a.alphasort.localeCompare(b.alphasort))
							.map((artist) => {
								return (
									<li onClick={() => this.openModal(artist.id, artist.displayname, artist.displaydate)} key={artist.id}>
										{artist.displayname}
									</li>
								);
							})}
					</StyledUl>
				</Row>
				<StyledRow>
					{this.state.next ? <PagButton onClick={this.fetchNextPage}>Next Page</PagButton> : null}
					{this.state.prev ? <PagButton onClick={this.fetchPrevPage}>Previous Page</PagButton> : null}
				</StyledRow>
			</Container>
		);
	}
}

export default ArtistList;

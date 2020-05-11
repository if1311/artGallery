import React, { Component } from "react";
import axios from "axios";
import "./Gallery.css";
import FullImage from "./FullImage";

class Gallery extends Component {
	constructor() {
		super();
		this.state = {
			searchField: "",
			imagesList: null,
			imageDiv: false,
			currentImage: null,
		};
	}

	componentDidMount() {
		axios
			.get("https://api.harvardartmuseums.org/object?size=100&page=456&apikey=221b4e10-7bc5-11ea-8865-8f439f2941d8")
			.then((res) => res.data)
			.then((data) => this.setState({ imagesList: data.records }));
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};

	showImage = (image) => {
		console.log(image);
		this.setState({ imageDiv: !this.state.imageDiv, currentImage: image });
		setTimeout(() => {
			document.body.style.overflowY = this.state.imageDiv ? "hidden" : "scroll";
		}, 10);
	};

	render() {
		return (
			<div>
				{this.state.imageDiv && (
					<FullImage
						currentImage={this.state.currentImage.primaryimageurl}
						name={this.state.currentImage.people ? this.state.currentImage.people[0].name : null}
						title={this.state.currentImage.title}
						date={this.state.currentImage.dated}
						category={this.state.currentImage.classification}
						technique={this.state.currentImage.technique}
						culture={this.state.currentImage.culture}
						showImage={this.showImage}
					/>
				)}

				<div className="container">
					<div className="search">
						<input type="search" placeholder="Search" onChange={this.onSearchChange}></input>
					</div>

					{this.state.imagesList === null ? (
						<h1>Loading...</h1>
					) : (
						this.state.imagesList
							.filter((item) => {
								if (item.hasOwnProperty("primaryimageurl") && item.primaryimageurl !== null) {
									return (
										this.state.searchField === "" || item.title.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
									);
								} else {
									return null;
								}
							})
							.map((item) => {
								return (
									<div className="photo">
										<div className="heading">
											<h4>{item.title}</h4>
										</div>

										<img onClick={() => this.showImage(item)} alt="placeholder" src={item.primaryimageurl}></img>
									</div>
								);
							})
					)}
				</div>
			</div>
		);
	}
}

export default Gallery;

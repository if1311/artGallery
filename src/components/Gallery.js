import React, { Component } from "react";
import axios from "axios";
import "./Gallery.css";

class Gallery extends Component {
	constructor() {
		super();
		this.state = {
			searchField: "",
			imagesList: null,
		};
	}

	componentDidMount() {
		axios
			.get("https://jsonplaceholder.typicode.com/photos/")
			.then((res) => res.data)
			.then((data) => this.setState({ imagesList: data }));
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		return (
			<div className="container">
				<div className="search">
					<input type="search" placeholder="Search" onChange={this.onSearchChange}></input>
				</div>

				{this.state.imagesList === null ? (
					<h1>Loading...</h1>
				) : (
					this.state.imagesList
						.filter((item) => {
							return this.state.searchField === "" || item.title.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
						})
						.map((item) => {
							return (
								<div className="photo">
									<div className="heading">
										<h4>{item.title}</h4>
									</div>

									<img alt="placeholder" src={item.thumbnailUrl}></img>
								</div>
							);
						})
				)}
			</div>
		);
	}
}

export default Gallery;

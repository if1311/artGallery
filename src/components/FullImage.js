import React, { Component } from "react";

export default class FullImage extends Component {
	render() {
		return (
			<div className="fullscreen">
				<div>
					<button onClick={this.props.showImage}>Close</button>
				</div>

				<div className="fullContainer">
					<div className="imageDiv">
						<a href={this.props.currentImage}>
							<img className="highlightImg" alt="idk" src={this.props.currentImage && this.props.currentImage}></img>
						</a>
					</div>
					<div className="descriptionDiv">
						<h4 style={{ display: this.props.name ? "block" : "none" }}>Artist</h4>
						<h3>{this.props.name}</h3>
						<h4>Title</h4>
						<h3>{this.props.title}</h3>
						<h4>Date</h4>
						<h3>{this.props.date}</h3>
						<h4>Technique</h4>
						<h3>{this.props.technique}</h3>
						<h4>Category</h4>
						<h3>{this.props.category}</h3>
						<h4>Culture</h4>
						<h3>{this.props.culture}</h3>
					</div>
				</div>
			</div>
		);
	}
}

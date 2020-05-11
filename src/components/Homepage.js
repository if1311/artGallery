import React from "react";
import "./Carousel.css";
import Carousel from "./Carousel";
import NavBar from "./NavBar";

class Homepage extends React.Component {
	render() {
		return (
			<div className="homepage">
				<nav className="navigation">
					<NavBar />
				</nav>
				<Carousel data={data} />
			</div>
		);
	}
}
const data = [
	{
		id: 0,
		colour: "#352a2d",
		img: "../images/the-girl-with-a-pearl-earring.jpg",
		artist: "Johannes Vermeer",
		title: "The Girl With A Pearl Earring",
	},
	{
		id: 1,
		colour: "#405a7b",
		img: "../images/starry-night.jpg",
		artist: "Vincent van Gogh",
		title: "The Starry Night",
	},
	{
		id: 2,
		colour: "#8d5b3f",
		img: "../images/the-scream2.jpg",
		artist: "Edvard Munch",
		title: "The Scream",
	},
	{
		id: 3,
		colour: "#554b42",
		img: "../images/the-lovers2.jpg",
		artist: "René Magritte",
		title: "The Lovers",
	},
	{
		id: 4,
		colour: "#505540",
		img: "../images/dali-memory2.jpg",
		artist: "Salvador Dalí",
		title: "The Persistence of Memory ",
	},
];

export default Homepage;

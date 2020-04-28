import React from "react";
import "../components/carousel.css";
import Carousel from "../components/Carousel";
import NavBar from "./NavBar";

class Homepage extends React.Component {
	render() {
		return (
			<div className="Homepage">
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
		colour: "#653d08",
		img: "../images/mona-lisa.jpg",
		artist: "Leonardo Da Vinci",
		title: "Mona Lisa",
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
		img: "../images/the-scream.jpg",
		artist: "Edvard Munch",
		title: "The Scream",
	},
	{
		id: 3,
		colour: "#352a2d",
		img: "../images/the-girl-with-a-pearl-earring.jpg",
		artist: "Johannes Vermeer",
		title: "The Girl With A Pearl Earring",
	},
	{
		id: 4,
		colour: "#b39768",
		img: "../images/the-creation-of-adam.jpg",
		artist: "Michelangelo",
		title: "The Creation Of Adam",
	},
];

export default Homepage;

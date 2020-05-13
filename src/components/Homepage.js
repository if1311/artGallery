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
		colour: "#7a4315",
		img: "../images/bird-king2.jpg",
		mobileImg: "../images/bird-king.jpg",
		artist: "Charles Bird King",
		title: "The Vanity of the Artist's Dream",
	},
	{
		id: 1,
		colour: "#734c30",
		img: "../images/saint-jerome2.jpg",
		mobileImg: "../images/saint-jerome.jpg",
		artist: "Joos van Cleve",
		title: "Saint Jerome in His Study",
	},
	{
		id: 2,
		colour: "#715c41",
		img: "../images/rocky-mountains2.jpg",
		mobileImg: "../images/rocky-mountains.jpg",
		artist: "Albert Bierstadt",
		title: 'Rocky Mountains, "Lander\'s Peak"',
	},
	{
		id: 3,
		colour: "#67543c",
		img: "../images/ballerinas2.jpg",
		mobileImg: "../images/ballerinas.jpg",
		artist: "Hilaire-Germain-Edgar Degas",
		title: "The Rehearsal",
	},
	{
		id: 4,
		colour: "#57a75d",
		img: "../images/self-portrait2.jpg",
		mobileImg: "../images/self-portrait.jpg",
		artist: "Vincent van Gogh",
		title: "Self-Portrait Dedicated to Paul Gauguin",
	},
];

export default Homepage;

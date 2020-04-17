import React from 'react';
import './carousel.css';
import Carousel from './Carousel';
import NavBar from './NavBar';

class Homepage extends React.Component {
    render() {
        return(
            <div className="Homepage">
				<nav className="navigation">
				<NavBar/>
                </nav>
                <Carousel data={data}/>
                </div>
        );
      }
}
const data = [{
	id: 0,
	header: 'Gluten-free Bicycle',
	body: 'Chillwave knausgaard chambray flannel tumblr, narwhal microdosing blog...',
	colour: '#000000',
	img: 'https://cdn.alexgrey.com/wp-content/uploads/2012/06/28211120/Alex_Grey_Bond.jpg',
	artist: "Alex Grey",
	title: "Fear Inoculum"
}, {
	id: 1,
	header: 'Post-ironic Disrupt',
	body: 'Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY...',
	colour: '#ba9077',
	img: "https://i.pinimg.com/originals/b4/40/86/b44086cea4d2abe24a0b04edf09a26d0.jpg",
	artist: "Vincent van Gogh",
	title: "Irises"
}, {
	id: 2,
	header: 'Lumber-Sexual Roof Party ',
	body: 'Flexitarian 3 wolf moon cliche, migas scenester street art...',
	colour: '#1ABC9C',
	img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/6e254e34632563.597d7056f284f.jpg',
	artist: "Blah",
	title: "blah blah"
}, {
	id: 3,
	header: 'Vegan hoodie trust fund',
	body: 'Farm-to-table tousled try-hard, normcore ethical tilde iPhone...',
	colour: '#C0392B',
	img: 'https://ae01.alicdn.com/kf/HTB1.WHBXhGYBuNjy0Fnq6x5lpXaZ/Hot-Sale-Custom-Alex-Grey-Oversoul-Poster-New-Nice-Prints-high-qualiot-style-Wall-Poster-custom.jpg',
	artist: "BlaH",
	title: "bLaH BlAh"
}, {
	id: 4,
	header: 'cliche craft beer',
	body: 'Tote bag flannel normcore polaroid +1. Quinoa actually 90s sustainable...',
	colour: '#513B56',
	img: 'https://cdn.alexgrey.com/wp-content/uploads/2012/06/28203035/Alex_Grey_InterBeing.jpg',
	artist: "blah blah",
	title: "blah blah"
}];

export default Homepage;
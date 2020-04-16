import React from 'react';
import './carousel.css';
import Carousel from './Carousel';

class Homepage extends React.Component {
    render() {
        return(
            <div className="Homepage">
				{/* <nav className="navigation">
                </nav> */}
                <Carousel data={data}/>
                </div>
        );
      }
}
const data = [{
	id: 0,
	header: 'Gluten-free Bicycle',
	body: 'Chillwave knausgaard chambray flannel tumblr, narwhal microdosing blog...',
	colour: '#242846',
	img: 'https://aboutnewsweekly.com/wp-content/uploads/sites/208/2019/04/starry-night-art-plain_CFh-1200x675.jpg',
	artist: "Van Gough",
	title: "Blah blah blah"
}, {
	id: 1,
	header: 'Post-ironic Disrupt',
	body: 'Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY...',
	colour: '#ba9077',
	img: 'https://cdn.theculturetrip.com/wp-content/uploads/2019/01/vincent_van_gogh_-_the_church_in_auvers-sur-oise_view_from_the_chevet_-_google_art_project.jpg'
	
}, {
	id: 2,
	header: 'Lumber-Sexual Roof Party ',
	body: 'Flexitarian 3 wolf moon cliche, migas scenester street art...',
	colour: '#1ABC9C',
	img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc3.jpg'
}, {
	id: 3,
	header: 'Vegan hoodie trust fund',
	body: 'Farm-to-table tousled try-hard, normcore ethical tilde iPhone...',
	colour: '#C0392B',
	img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc4.jpg'
}, {
	id: 4,
	header: 'cliche craft beer',
	body: 'Tote bag flannel normcore polaroid +1. Quinoa actually 90s sustainable...',
	colour: '#513B56',
	img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc5.jpg'
}];

export default Homepage;
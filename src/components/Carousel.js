import React from 'react';
import './carousel.css';

class Carousel extends React.Component {
    render() {
        return(
            <div className="Carousel">
                <div className="information">
                <div>
                   <nav className="navigation">
                        //component goes here
                   </nav>
                </div>
                    <h2>{this.props.author}</h2>
                </div>
                <div className="image">
                    <h2><em>{this.props.title}</em></h2>
                        <img className="picture" src={this.props.image} alt="Painting"></img>
                </div>
            </div>
        );
      }
}

export default Carousel;
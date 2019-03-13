import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        let { index } = this.props
        return (
            <p className="carousel">
                <img id="carouselImage" src={this.props.data[index].thumbnailUrl} alt='a' />
            </p>
        );
    }
}

export default Carousel;



import React, { Component } from 'react';

class Grid extends Component {

    render() {
        let value = "0px";

        let { photo, index, idx } = this.props;
        if (index === idx) {
            value = "5px";
        }
        return (
            <img style={{ margin: '5px' }} border={value} width="100px" height="100px" src={photo.thumbnailUrl} alt="grid" />
        );
    }
}

export default Grid;
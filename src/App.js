import React, { Component } from 'react';
import "./App.css";
import Grid from "./components/Grid";
import "./App.css";
import Carousel from "./components/Carousel";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      data: [],
    }

  }
  prev = () => {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
      })
    }
  }
  next = () => {
    const index = this.state.index === this.state.data.length - 1 ? 0 : this.state.index + 1
    this.setState({
      index
    })
  }
  click = (index) => {
    this.setState({
      index,
    });
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json()).then(json => this.setState({ data: json }));
  }

  render() {
    let img;
    let grid;
    if (this.state.data.length) {
      img = <Carousel data={this.state.data} index={this.state.index} />
      grid = this.state.data.map((item, idx) => {
        return (
          <div key={item.id} id="images" onClick={() => this.click(idx)}>
            <Grid index={this.state.index} idx={idx} photo={item} />
          </div>
        )

      });

    }
    return (
      <div className="container">
        <p onClick={this.prev} id='arrowLeft'></p>
        {img}
        <p onClick={this.next} id="arrowRight"></p>
        {grid}
      </div >
    );
  }
}

export default Gallery;
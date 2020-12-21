import React, { Component } from 'react';
import Box from './box/box';
import BoxItem from './box/boxItem';
class Boxes extends Component {
  constructor() {
    super();
    this.state = {
      BoxItem
    };
  }
  render() {
    return (
      <section id="boxes">
        <div className="container">
          <h1>
            <span className="highlight">How it Works</span>
          </h1>
          <Box boxItem={this.state.BoxItem} />
        </div>
      </section>
    );
  }
}
export default Boxes;

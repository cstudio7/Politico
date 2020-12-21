import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Boxes extends Component {
  render() {
    return (
      <div className="box">
        <h3>{this.props.item.title}</h3>
        <img src={this.props.item.imageUri} />
        <p>{this.props.item.desc}</p>
      </div>
    );
  }
}
Boxes.propTypes = {
  item: PropTypes.object.isRequired
};
export default Boxes;

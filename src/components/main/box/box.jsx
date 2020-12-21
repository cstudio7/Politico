import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoxList from './boxList';
class Box extends Component {
  render() {
    return this.props.boxItem.map(item => (
      <BoxList key={item.id} item={item} />
    ));
  }
}
Box.propTypes = {
  boxItem: PropTypes.array.isRequired
};
export default Box;

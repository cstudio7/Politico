import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
class LeftComponent extends Component {
  render() {
    return (
      <div id="left">
        <div className="pageform">
          <h1>{this.props.item.title}</h1>
          {this.props.item.desc}
          <p>
            <Link to={this.props.item.linkPage}>
              <button className="button_2">{this.props.item.linkText}</button>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
LeftComponent.propTypes = {
  item: PropTypes.object.isRequired
};
export default LeftComponent;

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Showcase from './showcase';
import Divider from './divider';
import Party from '../party/party';
import Boxes from './boxes';
import './main.css';

class Main extends Component {
  render() {
    const isAuthenticated = this.props.isAuthenticated;

    const guestLayout = (
      <Fragment>
        <Showcase />
        <Divider />
        <Boxes />
      </Fragment>
    );

    const userLayout = (
      <Fragment>
        <Divider />
        <Party />
      </Fragment>
    );

    return (
      <div className="main">{isAuthenticated ? userLayout : guestLayout}</div>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    isAuthenticated: authUser.isAuthenticated
  };
};

Main.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  null
)(Main);

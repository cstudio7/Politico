// import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CheckAuth = () => {
  const isAuthenticated = this.props.isAuthenticated;
  const user = this.props.user;

  const authDetails = {
    user,
    isAuthenticated
  };
  return authDetails;
};

const mapStateToProps = ({ authUser }) => {
  return {
    isAuthenticated: authUser.isAuthenticated,
    user: authUser.user
  };
};

CheckAuth.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  null
)(CheckAuth);

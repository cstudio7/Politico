import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './signUpForm';
import { userSignUpRequest } from './../../actions/authActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SignUpRightComponent extends Component {
  render() {
    return (
      <div>
        <h1>Create Account</h1>
        <SignUpForm
          userSignUpRequest={this.props.userSignUpRequest}
        />
        <p>
          Existing User! <Link to="/login">Sign In</Link>
        </p>
      </div>
    );
  }
}
SignUpRightComponent.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired,
};

export default connect(
  null,
  { userSignUpRequest }
)(SignUpRightComponent);

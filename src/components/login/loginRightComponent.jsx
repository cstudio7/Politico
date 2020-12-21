import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './loginForm';
import { userLoginRequest } from './../../actions/authActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LoginRightComponent extends Component {
  render() {
    return (
      <div>
        <h1>Sign in to Politico</h1>
        <LoginForm
          userLoginRequest={this.props.userLoginRequest}
        />
        <p className="alignTxtRight">
          <Link to="/">
            <i className="fas fa-home" /> HOME
          </Link>{' '}
          |<Link to="/signup">CREATE ACCOUNT</Link> |
          <Link to="/forgotpassword">FORGOT PASSWORD</Link>
        </p>
      </div>
    );
  }
}

LoginRightComponent.propTypes = {
  userLoginRequest: PropTypes.func.isRequired,
};

export default connect(
  null,
  { userLoginRequest }
)(LoginRightComponent);

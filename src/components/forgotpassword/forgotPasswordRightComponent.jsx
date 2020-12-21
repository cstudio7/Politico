import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ForgotPasswordForm from './forgotPasswordForm';

class ForgotPasswordRightComponent extends Component {
  render() {
    return (
      <div>
        <h1>Forgot Password</h1>
        <ForgotPasswordForm />
        <p className="alignTxtRight">
          <Link to="/">
            <i className="fas fa-home" /> HOME
          </Link>{' '}
          |<Link to="/signup">CREATE ACCOUNT</Link> |
          <Link to="/login">SIGN IN</Link>
        </p>
      </div>
    );
  }
}
export default ForgotPasswordRightComponent;

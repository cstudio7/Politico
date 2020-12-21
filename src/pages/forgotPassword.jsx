import React, { Component } from 'react';
import Footer from '../components/footer/footer';
import ForgotPasswordComponent from '../components/forgotpassword';
class ForgotPassword extends Component {
  render() {
    return (
      <div>
        <ForgotPasswordComponent />
        <Footer />
      </div>
    );
  }
}
export default ForgotPassword;

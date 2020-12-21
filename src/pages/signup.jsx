import React, { Component } from 'react';
import Footer from '../components/footer/footer';
import SignUpComponent from '../components/signup';
class Signup extends Component {
  render() {
    return (
      <div>
        <SignUpComponent />
        <Footer />
      </div>
    );
  }
}
export default Signup;

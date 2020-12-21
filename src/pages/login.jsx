import React, { Component } from 'react';
import Footer from '../components/footer/footer';
import LoginComponent from '../components/login';
class Login extends Component {
  render() {
    return (
      <div>
        <LoginComponent />
        <Footer />
      </div>
    );
  }
}
export default Login;

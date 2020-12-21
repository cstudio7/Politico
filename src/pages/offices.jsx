import React, { Component } from 'react';
import Header from './../components/header/header';
import Footer from './../components/footer/footer';
import Divider from './../components/main/divider';
import Offices from './../components/offices/offices';

class OfficePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Divider/>
        <Offices/>
        <Footer />
      </div>
    );
  }
}
export default OfficePage;

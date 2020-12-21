import React, { Component } from 'react';
import logo from './../../img/thumb1.png';
import CustomNav from './../navBar/';
import './header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className='header'  color="light" light expand="md">
          <NavbarBrand href="/">
            <div id='branding'><h2>
              <img src={logo} width="30px" />
              <span className="highlight">Politico</span>
            </h2></div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <CustomNav/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;

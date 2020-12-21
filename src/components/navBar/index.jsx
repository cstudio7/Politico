import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from './../../actions/authActions';
import { NavItem, NavLink } from 'reactstrap';

class NavigationBar extends Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const isAuthenticated = this.props.isAuthenticated;
    let isAdmin;

    if (isAuthenticated) {
      isAdmin = this.props.user.isAdmin;
    }

    const userLinks = (
      <Fragment>
        <NavItem>
          <NavLink href={'/'}>
            <i className="fas fa-plus-circle" />
            {isAdmin?'View/Create Parties':'View Parties'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={'/offices'}>
            <i className="fas fa-plus-circle" />
            {isAdmin?'View/Create Office':'View offices'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/profile">
            <i className="fas fa-plus-circle" />
            View Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={this.logout.bind(this)}>
            <i className="fas fa-sign-out-alt" />
            Logout
          </NavLink>
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <NavLink href="/">
            <i className="fas fa-home" />
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">
            <i className="fas fa-home" />
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/signup">
            <i className="fas fa-plus-circle" />
            Sign Up
          </NavLink>
        </NavItem>
      </Fragment>
    );

    return <Fragment>{isAuthenticated ? userLinks : guestLinks}</Fragment>;
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    isAuthenticated: authUser.isAuthenticated,
    user: authUser.user
  };
};

NavigationBar.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { logout }
)(NavigationBar);

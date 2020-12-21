import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Divider extends Component {
  render() {
    const isAuthenticated = this.props.isAuthenticated;
    let firstName;
    let lastName;
    let userImage;

    if (isAuthenticated) {
      const { firstname, lastname, user_image } = this.props.user;
      firstName = firstname ? firstname.toUpperCase() : firstname;
      lastName = lastname ? lastname.toUpperCase() : lastname;
      userImage = user_image;
    }

    const userDisplay = (
      <Fragment>
        <div id="username">
          <img src={userImage} width="50px" height="50px" />☰ Welcome,{' '}
          <i className="fas fa-users" />
          {`${lastName}  ${firstName}`}{' '}
        </div>
      </Fragment>
    );

    const guestDisplay = (
      <Fragment>
        <h1>Get Updates</h1>
        <form>
          <input type="email" placeholder="Enter Email" />
          <button type="submit" className="button_1">
            Subscribe
          </button>
        </form>
      </Fragment>
    );

    return (
      <section id="newsletter">
        <div className="container">
          {isAuthenticated ? userDisplay : guestDisplay}
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    isAuthenticated: authUser.isAuthenticated,
    user: authUser.user
  };
};

Divider.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  null
)(Divider);

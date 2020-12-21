import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    const { email, lastname, firstname, phonenumber } = this.props.user;
    let userImage;
    let userFullName;
    if (this.props.user) {
      userImage = this.props.user.user_image;
      if (firstname && lastname) {
        userFullName = firstname.concat(' ', lastname);
      }
    }

    return (
      <Fragment>
        <div className="profilecontainer">
          <div className="pageform">
            <div className="profileflex-container">
              <div className="isCentered" id="userImage">
                <img src={userImage} />
              </div>
              <p className="alignTxtLeft">Welcome, {userFullName && userFullName.toUpperCase()}</p>
              <div>
                <div>Email: {email}</div>
              </div>
              <div>
                <div>Phone Number: {phonenumber}</div>
              </div>
              <div className="isCentered" style={{ color: '#e8491d' }}>
                <h4>Your Vote Activity</h4>
              </div>
              <div>
                <span className="span">Offices:</span> NA
              </div>
              <div>
                <span className="span">Candidates:</span>NA
              </div>
              <div>
                <span className="span">Votes:</span>NA
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  return {
    user: authUser.user
  };
};

Profile.propTypes = {
  user: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  null
)(Profile);

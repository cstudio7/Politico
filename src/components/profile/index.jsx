import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './profile';
import './profile.css';

const ProfileComponent = () => {
  return (
    <div className="wallpaper">
      <main className="content">
        <div className="container" id="wrap">
          <div id="right" className="radius">
            <p className="alignTxtRight">
              <Link to="/">
                <button className="button_3">
                  <i className="fas fa-sign-out-alt" /> Back
                </button>
              </Link>
            </p>
            <section id="officeList">
              <Profile />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileComponent;

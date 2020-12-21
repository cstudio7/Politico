import React, { Component } from 'react';
import LeftComponent from '../leftComponent';
import RightComponent from '../rightComponent';
import signUpLeftItem from './signUpLeftItem';
import SignUpRightComponent from './signUpRightComponent';
import './signup.css';

class SignUpComponent extends Component {
  constructor() {
    super();
    this.state = {
      signUpLeftItem
    };
  }
  render() {
    const SignUpRightItem = RightComponent(SignUpRightComponent);
    return (
      <div className="wallpaper">
        <main className="content">
          <div className="container" id="wrap">
            <LeftComponent item={this.state.signUpLeftItem} />
            <SignUpRightItem />
          </div>
        </main>
      </div>
    );
  }
}

export default SignUpComponent;

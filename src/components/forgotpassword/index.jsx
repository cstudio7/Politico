import React, { Component } from 'react';
import LeftComponent from '../leftComponent';
import passwordLeftItem from '../login/loginLeftItem';
import RightComponent from '../rightComponent';
import ForgotPasswordRightComponent from './forgotPasswordRightComponent';
import './index.css';
class ForgotPasswordComponent extends Component {
  constructor() {
    super();
    this.state = {
      passwordLeftItem
    };
  }
  render() {
    const ForgotPasswordRightItem = RightComponent(
      ForgotPasswordRightComponent
    );
    return (
      <div className="wallpaper">
        <main className="content">
          <div className="container" id="wrap">
            <LeftComponent item={this.state.passwordLeftItem} />
            <ForgotPasswordRightItem />
          </div>
        </main>
      </div>
    );
  }
}
export default ForgotPasswordComponent;

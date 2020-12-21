import React, { Component } from 'react';
import LeftComponent from '../leftComponent';
import loginLeftItem from './loginLeftItem';
import RightComponent from '../rightComponent';
import LoginRightComponent from './loginRightComponent';
import './login.css';
class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      loginLeftItem
    };
  }
  render() {
    const LoginRightItem = RightComponent(LoginRightComponent);
    return (
      <div className="wallpaper">
        <main className="content">
          <div className="container" id="wrap">
            <LeftComponent item={this.state.loginLeftItem} />
            <LoginRightItem />
          </div>
        </main>
      </div>
    );
  }
}
export default LoginComponent;

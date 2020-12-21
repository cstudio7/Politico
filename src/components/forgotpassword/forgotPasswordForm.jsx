import React, { Component } from 'react';

class ForgotPasswordForm extends Component {
  render() {
    return (
      <div>
        <form id="forgotPasswordForm">
          <p>
            <input type="email" placeholder="Email" required />
          </p>
          <p>
            <input type="submit" value="Reset Password" className="button_1" />
          </p>
          <p id="responseMsg" />
        </form>
      </div>
    );
  }
}
export default ForgotPasswordForm;

import React, { Component } from 'react';
import ImageUpload from '../uploadImage';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import ValidateInput from './../../validations/signup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: '',
      firstname: '',
      phonenumber: '',
      email: '',
      password: '',
      confirm_password: '',
      passporturl: '',
      errors: {},
      isLoading: false,
      invalid: false,
      redirect: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setUrl = this.setUrl.bind(this);
    this.isValid = this.isValid.bind(this);
    this.displayError = this.displayError.bind(this);
  }

  displayError(value) {
    if (value) {
      return (<span className='alerts'>{value}</span>)
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignUpRequest(this.state).then(
        () => {
          this.setState({ redirect: true });
          toast.success('Account created successfully')
        },
        error => {
          this.setState({ errors: error.response.data, isLoading: false });
          const { errors } = this.state;
          const displayServerError = errors.error;
          toast.error(displayServerError)
        }
      );
    }
  }
  setUrl(url) {
    this.setState({ passporturl: url });
  }

  isValid() {
    const { errors, isValid } = ValidateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  render() {
    const { errors } = this.state;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <ImageUpload getUrl={this.setUrl} />
          <p>
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.onChange}
              placeholder="Last Name"
            />
            {this.displayError(errors.lastname)}
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.onChange}
              placeholder="First Name"
            />
            {this.displayError(errors.firstname)}
          </p>
          <p>
            <input
              type="tel"
              name="phonenumber"
              value={this.state.phonenumber}
              onChange={this.onChange}
              placeholder="+234-phonenumber"
            />
            {this.displayError(errors.phonenumber)}

            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              placeholder="Email"
            />
            {this.displayError(errors.email)}
          </p>
          <p>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              placeholder="Password"
            />
            {this.displayError(errors.password)}

            <input
              type="password"
              name="confirm_password"
              value={this.state.confirm_password}
              onChange={this.onChange}
              placeholder="Confirm Password"
            />
            {this.displayError(errors.confirm_password)}
            <br />
            {this.displayError(errors.passporturl)}
            <br />
          </p>
          <p>
            <input
              type="submit"
              value="Sign Up"
              disabled={this.state.isLoading || this.state.invalid}
              className="button_1"
            />
          </p>
          <div />
        </form>
        <div style={{ display: 'none' }}>
        </div>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired,
};

export default SignUpForm;

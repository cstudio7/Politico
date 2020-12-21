import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import ValidateInput from './../../validations/login';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false,
      invalid: false,
      redirect: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.isValid = this.isValid.bind(this);
    this.displayError = this.displayError.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  displayError(value) {
    if (value) {
      return (<span className='alerts'>{value}</span>)
    }
  }
  isValid() {
    const { errors, isValid } = ValidateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userLoginRequest(this.state).then(
        () => {
          this.setState({ redirect: true });
          toast.success('Login successful')
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
  render() {
    const { errors } = this.state;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <Fragment>
        <div>
          <form onSubmit={this.onSubmit}>
            <p>
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
            </p>
            <p>
              <input
                type="submit"
                value="Login"
                disabled={this.state.isLoading || this.state.invalid}
                className="button_1"
              />
            </p>
            <div />
          </form>
        </div>
      </Fragment>
    );
  }
}

LoginForm.propTypes = {
  userLoginRequest: PropTypes.func.isRequired,
};

export default LoginForm;

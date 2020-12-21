import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ValidateInput from './../../validations/office';
import Spinner from './../spinner/Spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CreateOfficeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      officeName: '',
      officeType: '',
      errors: {},
      isLoading: false,
      invalid: false,
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
      this.props.createOffice(this.state).then(
        () => {
          toast.success(`${this.state.officeName} created successfully`)
          this.setState({isLoading:false})
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
    const { isLoading } = this.state;

    if (isLoading) {
      return <Spinner />;
    }
    return (
      <Fragment>
        <form className="form-inline" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Enter Office Name"
            name="officeName"
            value={this.state.officeName}
            onChange={this.onChange}
          />
          {this.displayError(errors.officeName)}
          <select
            name="officeType"
            value={this.state.officeType}
            onChange={this.onChange}
          >
            <option defaultValue>Select office type</option>
            <option value="Federal">Federal</option>
            <option value="state">State</option>
            <option value="Local Government">Local Government</option>
          </select>
          {this.displayError(errors.officeType)}
          <input
            type="submit"
            value="Add Office to List"
            disabled={this.state.isLoading || this.state.invalid}
            className="button_3"
          />
        </form>
      </Fragment>
    );
  }
}
CreateOfficeForm.propTypes = {
  createOffice: PropTypes.func.isRequired,
};
export default CreateOfficeForm;

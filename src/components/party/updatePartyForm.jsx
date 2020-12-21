import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ValidateInput from './../../validations/updateParty';
import Spinner from './../spinner/Spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './party.css';

class UpdatePartyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      partyName: '',
      partyDetail: '',
      hqAddress: '',
      errors: {},
      isLoading: false,
      invalid: false,
      redirect: false,
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
      this.setState({ errors: {}, isLoading: true});
      this.props.updateParty(this.state, this.props.id).then(
        () => {
          toast.success(`Party ${this.props.partyName} updated successfully`)
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
        <form className="form-inline" onSubmit={this.onSubmit} id={this.state.id}>
          <input
            type="text"
            placeholder="Enter Party Name"
            name="partyName"
            defaultValue={this.props.partyName}
            onChange={this.onChange}
          />
          {this.displayError(errors.partyName)}
          <input
            type="text"
            placeholder="Enter Party Name in Full"
            name="partyDetail"
            defaultValue={this.props.partyDetail}
            onChange={this.onChange}
          />
          {this.displayError(errors.partyDetail)}
          <input
            type="submit"
            value="Update Party"
            disabled={this.state.isLoading || this.state.invalid}
            className="button_3"
          />
        </form>
      </Fragment>
    );
  }
}
UpdatePartyForm.propTypes = {
  updateParty: PropTypes.func.isRequired,
  id: PropTypes.number,
  partyName: PropTypes.string,
  partyDetail:PropTypes.string,
};
export default UpdatePartyForm;

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/Spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './party.css';

class DeletePartyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      partyName: '',
      partyDetail: '',
      isLoading: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ isLoading: true });
    this.props.deleteParty(this.props.id).then(
      () => {
        toast.success(`Party ${this.props.partyName} deleted successfully`)
        this.setState({ isLoading: false });
      },
      error => {
        this.setState({ errors: error.response.data, isLoading: false });
        const { errors } = this.state;
        const displayServerError = errors.error;
        toast.error(displayServerError)
      }
    );
  }
  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <Spinner />;
    }
    return (
      <Fragment>
        Delete {this.props.partyDetail}?
        <br/>
        <button
          disabled={this.state.isLoading || this.state.invalid}
          className="button_3"
          onClick={this.onClick}
        >
          Yes
        </button>
      </Fragment>
    );
  }
}
DeletePartyForm.propTypes = {
  deleteParty: PropTypes.func.isRequired,
  id: PropTypes.number,
  partyName: PropTypes.string,
  partyDetail: PropTypes.string
};
export default DeletePartyForm;

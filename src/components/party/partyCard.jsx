import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from './../modal';
import UpdatePartyForm from './updatePartyForm';
import DeletePartyComponent from './deleteParty';
import { updateParty, deleteParty } from './../../actions/partyActions';

class PartyCard extends Component {
  render() {
    const showAdmin = this.props.showAdmin;
    const { id, logourl, partyname, partydetail, hqaddress } = this.props.party;
    const { updateParty, deleteParty } = this.props;

    return (
      <div className="card text-center" style={{ width: '15rem' }}>
        <img src={logourl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{partyname && partyname.toUpperCase()}</h5>
          <p className="card-text">{partydetail && partydetail.toUpperCase()}</p>
          <p className="card-text">{hqaddress && hqaddress.toUpperCase()}</p>
        </div>
        {showAdmin && (
          <Fragment>
            <div className="card-footer text-muted">
              <Modal
                color={'primary'}
                buttonLabel={<i className="far fa-edit" />}
                position={'right'}
                title={'Update Party'}
              >
                <UpdatePartyForm
                  id={id}
                  partyName={partyname}
                  partyDetail={partydetail}
                  updateParty={updateParty}
                />
              </Modal>
              <Modal
                color={'danger'}
                buttonLabel={<i className="far fa-trash-alt" />}
                position={'left'}
              >
                <DeletePartyComponent
                  id={id}
                  partyName={partyname}
                  partyDetail={partydetail}
                  deleteParty={deleteParty}
                />
              </Modal>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}
PartyCard.propTypes = {
  party: PropTypes.object.isRequired,
  showAdmin: PropTypes.bool,
  updateParty: PropTypes.func.isRequired,
  deleteParty: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateParty, deleteParty }
)(PartyCard);

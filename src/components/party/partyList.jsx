import React,{Component} from 'react';
import PropTypes from 'prop-types';
import PartyCard from './partyCard';


class PartyList extends Component{
    render(){
      return this.props.partyListItem.map((party, index)=>(
        <div key={index}>
        <PartyCard key={party.id} party={party} showAdmin={this.props.isAdmin}/>
        </div>  
      )
      );
   }
  }
  PartyList.propTypes = {
    partyListItem: PropTypes.array.isRequired,
    isAdmin: PropTypes.bool
  }
   export default PartyList;
  
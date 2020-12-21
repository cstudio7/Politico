import React from 'react';
import PropTypes from 'prop-types';

const DashBoard = (props) => {
  return (
    <div className="dashboardcontainer">
    <form style={{ float: 'right' }}>
      {props.button}
    </form>
    <section id='partyList'>
      <h1>
        <i className="fas fa-users">{props.title}</i>
      </h1>
      {props.children}
      </section>
      </div>
  )
}

DashBoard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.node,
};

export default DashBoard;


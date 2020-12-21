/* eslint-disable react/display-name */
import React from 'react';
import logo from './../img/thumb2.jpg';

const rightComponent = WrappedComponent => props => {
  return (
    <div id="right">
      <div className="pageform">
        <img src={logo} width="100px" />
        <div>
          <WrappedComponent {...props} />
        </div>
      </div>
    </div>
  );
};
export default rightComponent;

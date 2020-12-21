import React, { Fragment } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const displayError = value => {
  if (value) {
    return (
      <Fragment>
        <div {...{ display: 'none' }}>{toast.error(value)}</div>
      </Fragment>
    );
  }
};
export default displayError;

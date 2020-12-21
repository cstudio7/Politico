import { SET_CURRENT_USER } from './../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, actions = {}) => {
  switch (actions.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(actions.user),
        user: actions.user
      };
    default:
      return state;
  }
};

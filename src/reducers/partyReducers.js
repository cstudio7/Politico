import {
  FETCH_PARTY,
  ADD_PARTY,
  EDIT_PARTY,
  DELETE_PARTY
} from './../actions/types';

const initialState = {
  parties: [],
  party: ''
};

const PartyReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARTY:
      return {
        ...state,
        parties: action.payload
      };
    case ADD_PARTY:
      return {
        ...state,
        party: action.payload
      };
    case EDIT_PARTY:
      return {
        ...state,
        party: action.payload
      };
    case DELETE_PARTY:
      return state;
    default:
      return state;
  }
};
export default PartyReducers;

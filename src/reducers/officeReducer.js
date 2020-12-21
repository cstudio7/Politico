import {
  FETCH_OFFICE,
  ADD_OFFICE
  // GET_OFFICE_CANDIDATE
} from './../actions/types';

const initialState = {
  offices: [],
  office: ''
};

const OfficeReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OFFICE:
      return {
        ...state,
        offices: action.payload
      };
    case ADD_OFFICE:
      return {
        ...state,
        office: action.payload
      };
    default:
      return state;
  }
};
export default OfficeReducers;

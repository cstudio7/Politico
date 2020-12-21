import instance from './../config/axios';
import {
  FETCH_OFFICE,
  ADD_OFFICE
  // GET_OFFICE_CANDIDATE
} from './../actions/types';

export const fetchOffice = offices => {
  return {
    type: FETCH_OFFICE,
    payload: offices
  };
};

export const addOffice = office => {
  return {
    type: ADD_OFFICE,
    payload: office
  };
};

export const getAllOffice = () => {
  return async dispatch => {
    const res = await instance.get('/offices');
    dispatch(fetchOffice(res.data.data));
  };
};

export const createOffice = data => {
  return async dispatch => {
    const res = await instance.post('offices', data);
    dispatch(addOffice(res.data.data));
  };
};

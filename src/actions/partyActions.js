import instance from './../config/axios';
import {
  FETCH_PARTY,
  ADD_PARTY,
  EDIT_PARTY,
  DELETE_PARTY
} from './../actions/types';

export const fetchParty = parties => {
  return {
    type: FETCH_PARTY,
    payload: parties
  };
};

export const addParty = party => {
  return {
    type: ADD_PARTY,
    payload: party
  };
};

export const editParty = party => {
  return {
    type: EDIT_PARTY,
    payload: party
  };
};

export const removeParty = id => {
  return {
    type: DELETE_PARTY,
    id: id
  };
};

export const getAllParty = () => {
  return async dispatch => {
    const res = await instance.get('/parties');
    dispatch(fetchParty(res.data.data));
  };
};

export const createParty = data => {
  return async dispatch => {
    const res = await instance.post('parties', data);
    dispatch(addParty(res.data.data));
  };
};

export const updateParty = (data, id) => {
  return async dispatch => {
    const res = await instance.patch(`parties/${id}/name`, data);
    dispatch(editParty(res.data.data));
  };
};

export const deleteParty = id => {
  return async dispatch => {
    const res = await instance.delete(`parties/${id}`);
    dispatch(removeParty(res.data.data));
  };
};

import instance from '../config/axios';
import setAuthorizationToken from './../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from './types';

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

const authenticateUser = (res, dispatch) => {
  const token = res.data.data.token;
  localStorage.setItem('jwt', token);
  setAuthorizationToken(token);
  return dispatch(setCurrentUser(jwt.decode(token)));
};

export const userSignUpRequest = userData => {
  return async dispatch => {
    const res = await instance.post('auth/signup', userData);
    authenticateUser(res, dispatch);
  };
};

export const userLoginRequest = data => {
  return async dispatch => {
    const res = await instance.post('auth/login', data);
    authenticateUser(res, dispatch);
  };
};

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwt');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

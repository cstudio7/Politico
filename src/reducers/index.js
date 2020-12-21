import { combineReducers } from 'redux';
import parties from './partyReducers';
import authUser from './authReducer';
import offices from './officeReducer';

export default combineReducers({
  parties,
  offices,
  authUser
});

import Axios from 'axios';

const setAuthorizationzationToken = token => {
  if (token) {
    Axios.defaults.headers.common['Authorization'] = `${token}`;
  }
  delete Axios.defaults.headers.common['Authorization'];
};
export default setAuthorizationzationToken;

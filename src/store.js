import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancers = [];

if (process.env.NODE_ENV === 'development') {

  if (typeof devToolsExtension === 'function') {
      enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    ...enhancers
  )
);
export default store;

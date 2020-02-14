/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

// const reducer = (state = {}, action) => state;
const store = createStore(
  rootReducer,
  devToolsEnhancer(),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;

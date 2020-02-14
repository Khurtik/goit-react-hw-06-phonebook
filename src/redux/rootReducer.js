import { combineReducers } from 'redux';
import contactReducers from './contact/contactReducers';

const rootReducer = combineReducers({
  contacts: contactReducers,
});

export default rootReducer;

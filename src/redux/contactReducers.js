import { combineReducers } from 'redux';
import Types from './contactTypes';

const contactReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Types.ADD_CONTACT:
      return [...state, payload.data];

    case Types.DELETE_CONTACT:
      return state.filter(item => item.id !== payload.id);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case Types.FILTER_CONTACT:
      return payload.value;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export default rootReducer;

import types from '../types';

const initial = {
  items: [],
};

const contactReducers = (state = initial, { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return {
        ...state,
        items: [...state.items, payload.data],
      };

    case types.DELETE_CONTACT:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload.id),
      };

    default:
      return state;
  }
};

export default contactReducers;

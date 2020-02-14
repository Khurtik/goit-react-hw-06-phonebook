import types from '../types';

export const addContactAction = data => ({
  type: types.ADD_CONTACT,
  payload: {
    data,
  },
});

export const deleteContactAction = id => ({
  type: types.DELETE_CONTACT,
  payload: {
    id,
  },
});

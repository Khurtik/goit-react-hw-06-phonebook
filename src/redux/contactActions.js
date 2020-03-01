import Types from './contactTypes';

export const addContactAction = data => ({
  type: Types.ADD_CONTACT,
  payload: {
    data,
  },
});

export const deleteContactAction = id => ({
  type: Types.DELETE_CONTACT,
  payload: {
    id,
  },
});

export const filterContactAction = value => ({
  type: Types.FILTER_CONTACT,
  payload: {
    value,
  },
});

import uuid from 'uuid';
import axios from 'axios';

import validateBeforeOnchange from '../utils/validation';

// types
const ADD_INPUT = 'ADD_INPUT';
const REMOVE_INPUT = 'REMOVE_INPUT';
const ON_CHANGE = 'ON_CHANGE';

// reducer
const initialState = [];

export default function inputReducer(state = initialState, action) {
  const { payload, type } = action;
  let index;
  let newState;

  switch (type) {
    case ADD_INPUT:
      return [...state, payload];
    case REMOVE_INPUT:
      return state.filter(item => item.id !== payload);
    case ON_CHANGE:
      index = state.findIndex(item => item.id === payload.id);
      newState = state.map(item => item);
      newState[index].text = payload.text;
      return newState;
    default:
      return state;
  }
}

// actions
export const addInput = text => ({
  type: ADD_INPUT,
  payload: {
    text,
    id: uuid()
  }
});

export const getInitialResult = () => dispatch => {
  axios
    .get('https://api.myjson.com/bins/xpf4k')
    .then(res => {
      const array = res.data.value.split(' - ');
      array.forEach(item => {
        dispatch(addInput(item));
      });
    })
    .catch(err => console.log(err));
};

export const removeInput = id => ({
  type: REMOVE_INPUT,
  payload: id
});

export const inputOnChange = (id, value) => {
  const text = validateBeforeOnchange(value);
  return {
    type: ON_CHANGE,
    payload: {
      id,
      text
    }
  };
};

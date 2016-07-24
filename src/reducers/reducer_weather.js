import { FETCH_WEATHER } from './../actions/index';

export default function(state = [], action) {
  console.log('Action received', action);

  switch (action.type) {
    case FETCH_WEATHER:

      //create a new array instead of modyfying the existing one
      return [action.payload.data, ...state] // ES6 == return state.concat([action.payload.data]);
  }

  return state;
};

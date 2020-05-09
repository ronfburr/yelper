import {
  UPDATE_TERM,
  UPDATE_LOCATION,
  UPDATE_NUMBER,
  UPDATE_METHOD,
  FETCH_DATA_SUCCESS
} from '../actions/updateSearch';

const conversionReducer = (state = {}, action) => {
  let new_state = { ...state }
  switch(action.type) {
    case UPDATE_TERM :
      new_state['term'] = action.payload.input
      return new_state
    case UPDATE_LOCATION :
      new_state['location'] = action.payload.input
      return new_state
    case UPDATE_NUMBER :
      new_state['number'] = action.payload.input
      return new_state
    case UPDATE_METHOD :
      new_state['method'] = action.payload.input
      new_state['result'] = action.payload.input
      return new_state
    case FETCH_DATA_SUCCESS:
      new_state['result'] = action.payload.result
      new_state['results'] = action.payload.results
      return new_state
    default :
      return state
  };
};

export default conversionReducer;

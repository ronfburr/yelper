import { UPDATE_REVIEW_TERM, FETCH_REVIEW_DATA_SUCCESS } from '../actions/updateReview';

const reviewReducer = (state = {}, action) => {
  let new_state = { ...state }
  switch(action.type) {
    case UPDATE_REVIEW_TERM :
      new_state['term'] = action.payload.input
      return new_state
    case FETCH_REVIEW_DATA_SUCCESS:
      new_state['reviews'] = action.payload.reviews
      return new_state
    default :
      return state
  };
};

export default reviewReducer;

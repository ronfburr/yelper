import axios from 'axios';

export const UPDATE_REVIEW_TERM = "UPDATE_REVIEW_TERM";
export const FETCH_REVIEW_DATA_SUCCESS = "FETCH_REVIEW_DATA_SUCCESS";
export const FETCH_REVIEW_DATA_HAS_ERRORED = "FETCH_REVIEW_DATA_HAS_ERRORED"

export const updateReviewTerm = (input) => (
  {
    type: UPDATE_REVIEW_TERM,
    payload: {
      input: input
    }
  }
);

export function fetchReviewData(term) {
  const url = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/' + term + '/reviews'
  const key = 'mqjIyyel9uxk9y9Lzfpb3mtk9atPVJe0VO5TiaxSn_3k54euZfr4MIQM7b0dtE9x9ytbkQnioDzx8hoLtYH7rNg71F8spf-zb0jRkX-Ds--d7vWFAg_LYk_M2RCrXnYx'
  const params = {
    headers: {
      'Authorization': 'Bearer ' + key,
    }
  }
  return (dispatch) => {
    axios.get(url, params)
    .then((response) => {
      dispatch(fetchReviewDataSuccess(response.data.reviews))
    })
    .catch(() => dispatch(reviewHasErrored(true)));
  };
}

export function fetchReviewDataSuccess(reviews) {
  return {
    type: FETCH_REVIEW_DATA_SUCCESS,
    payload: {
      reviews: reviews
    }
  };
}

export function reviewHasErrored(bool) {
    return {
        type: FETCH_REVIEW_DATA_HAS_ERRORED,
        hasErrored: bool
    };
}

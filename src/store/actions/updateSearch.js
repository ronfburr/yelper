import axios from 'axios';
import { yelp_parse } from '../../utils/yelp_parse'

export const UPDATE_TERM = "UPDATE_TERM";
export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const UPDATE_NUMBER = "UPDATE_NUMBER";
export const UPDATE_METHOD = "UPDATE_METHOD";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_HAS_ERRORED = "FETCH_DATA_HAS_ERRORED";
export const FETCH_DATA_IS_LOADING = "FETCH_DATA_IS_LOADING";

export const updateTerm = (input) => (
  {
    type: UPDATE_TERM,
    payload: {
      input: input
    }
  }
)

export const updateLocation = (input) => (
  {
    type: UPDATE_LOCATION,
    payload: {
      input: input
    }
  }
)

export const updateNumber = (input) => (
    {
    type: UPDATE_NUMBER,
    payload: {
      input: input
    }
  }
)

export const updateMethod = (input) => (
    {
    type: UPDATE_METHOD,
    payload: {
      input: input
    }
  }
)

export function fetchData(term, location, limit, method) {
  //const term = searchParams
  //console.log(term)
  const url = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search'
  const key = 'mqjIyyel9uxk9y9Lzfpb3mtk9atPVJe0VO5TiaxSn_3k54euZfr4MIQM7b0dtE9x9ytbkQnioDzx8hoLtYH7rNg71F8spf-zb0jRkX-Ds--d7vWFAg_LYk_M2RCrXnYx'
  const params = {
    headers: {
      'Authorization': 'Bearer ' + key,
    },
    params: {
      term: term,
      location: location,
      radius: 40000,
      limit: limit,
      sort_by: method
    }
  }
  return (dispatch) => {
    axios.get(url, params)
    .then((response) => {
      dispatch(fetchDataSuccess(response.data.businesses))
    })
    .then((response) => response.json())
    .then((items) => {
      console.log('test4')
      dispatch(fetchDataSuccess(items))
    })
    .catch(() => dispatch(hasErrored(true)));
    dispatch(isLoading(true));
  };
}

export function fetchDataSuccess(items) {
  const result = yelp_parse(items);
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      result: result,
      results: items
    }
  };
}

export function hasErrored(bool) {
    return {
        type: FETCH_DATA_HAS_ERRORED,
        hasErrored: bool
    };
}

export function isLoading(bool) {
  return {
    type: FETCH_DATA_IS_LOADING,
    isLoading: bool
  };
}

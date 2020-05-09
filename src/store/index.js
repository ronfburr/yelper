import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import searchReducer from './reducers/searchReducer';
import reviewReducer from './reducers/reviewReducer';

const reducer = combineReducers({
  search: searchReducer,
  review: reviewReducer
});

const initialState = {
  search: {
    term: "Ice Cream",
    location: 'atlanta, ga',
    number: 5,
    method: 'rating',
    result: '',
    results: []
  },
  review: {
    term: 'jenis-splendid-ice-creams-atlanta',
    reviews: []
  }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

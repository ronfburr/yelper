import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import searchReducer from './reducers/searchReducer';
import logReducer from './reducers/logReducer';

const reducer = combineReducers({
  search: searchReducer,
  log: logReducer
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
  log: [
    {
      term: "Ice Cream",
      location: 'atlanta, ga',
      number: 5,
      method: 'rating',
      result: '',
      results: []
    }
  ]
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

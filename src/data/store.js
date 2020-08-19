import { createStore, compose, applyMiddleware } from 'redux';
import persistState from "redux-localstorage";

import initial from './initial';
import reducer from './reducer';

// middleware to allow axios API calls
import thunk from "redux-thunk";

  // set up local storage
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // store set up
  const store = createStore(
    reducer,
    initial,
    composeEnhancers(
      applyMiddleware(thunk),
      persistState()
    )
  );
  
  export default store;
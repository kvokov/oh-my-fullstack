import { createStore, applyMiddleware /* , compose */ } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Map } from 'immutable';
import rootReducer from './reducers';
import rootEpic from './epics';

const defaultState = Map({});

const initializeStore = (initialState = defaultState) => {
  /*
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
  */

  const epicMiddleware = createEpicMiddleware();
  const middleware = applyMiddleware(
    epicMiddleware,
  );

  const store = createStore(rootReducer, initialState, middleware);

  epicMiddleware.run(rootEpic);

  return store;
};

export default initializeStore;

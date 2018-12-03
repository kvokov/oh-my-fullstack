import { map } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import * as actionTypes from '../actions/action-types';
import { setCounter } from '../actions/counter';

export const increment = (action$, state$) => action$.pipe(
  ofType(actionTypes.INCREMENT),
  map(() => setCounter(state$.value.getIn(['counter', 'count']) + 1)),
);

export const decrement = (action$, state$) => action$.pipe(
  ofType(actionTypes.DECREMENT),
  map(() => setCounter(state$.value.getIn(['counter', 'count']) - 1)),
);

export default combineEpics(increment, decrement);

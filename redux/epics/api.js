import { combineEpics, ofType } from 'redux-observable';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import * as actionTypes from '../actions/action-types';
import { setData, setError } from '../actions';

export const getApiData = action$ => action$.pipe(
  ofType(actionTypes.GET_DATA),
  mergeMap(() => ajax.getJSON('/api').pipe(
    map(response => setData(response)),
    catchError(error => of(setError(error.message))),
  )),
);

export default combineEpics(getApiData);

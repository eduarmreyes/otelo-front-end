/*
 * FeaturedListReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_FEATURED_STAYS_SUCCESS,
  LOAD_FEATURED_STAYS,
  LOAD_FEATURED_STAYS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  featuredStaysData: {},
});

function featuredListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FEATURED_STAYS:
      return state
        .set('loading': true)
        .set('error', false)
        .set('featuredStaysData', {});
    case LOAD_FEATURED_STAYS_SUCCESS:
      return state
        .set('featuredStaysData', action.featuredStays)
        .set('loading', false);
    case LOAD_FEATURED_STAYS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default featuredListReducer;

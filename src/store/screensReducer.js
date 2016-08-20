import { combineReducers } from 'redux';
import * as actions from './actions';
// REDUCERS
const byId = (state = {}, action) => {
  switch(action.type) {
    case actions.SCREENS_GET_SUCCESS: {
      const nextState = Object.assign(
        {},
        state
      );
      action.screens.forEach(screen => {
        nextState[screen.id] = screen
      });
      return nextState;
    }
    default:
      return state;
  }
}
const allIds = (state = [], action) => {
  switch (action.type) {
    case actions.SCREENS_GET_SUCCESS:
      return action.screens.map(screen => screen.id);
    default:
      return state;
  }
};
const isGetting = (state = false, action) => {
  switch (action.type) {
    case actions.SCREENS_GET:
      return true;
    case actions.SCREENS_GET_SUCCESS:
    case actions.SCREENS_GET_ERROR:
      return false;
    default:
      return state;
  }
}
const isGettingError = (state = false, action) => {
  switch (action.type) {
    case actions.SCREENS_GET:
      return false;
    case actions.SCREENS_GET_SUCCESS:
      return false;
    case actions.SCREENS_GET_ERROR:
      return true;
    default:
      return state;
  }
}
export const reducer = combineReducers({
  byId,
  allIds,
  isGetting,
  isGettingError
});
// END
// ACCESSORS
export const get = (state) =>
  state.allIds.map(id => state.byId[id]);
export const getIsGetting = (state) =>
  state.isGetting;
export const getIsGettingError = (state) =>
  state.isGettingError;
// END

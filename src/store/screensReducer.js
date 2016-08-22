import { combineReducers } from 'redux';
import sortBy from 'lodash/sortBy';
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
    case actions.SCREENS_PUT_SUCCESS: {
      let id;
      const oldOrder = state[action.screen.id].order;
      const nextState = Object.assign(
        {},
        state
      );
      for (id in nextState) {
        const oldScreen = nextState[id];
        if (action.screen.order < oldOrder) {
          if (oldScreen.order >= action.screen.order && oldScreen.order < oldOrder) {
            nextState[id] = Object.assign(
              {},
              oldScreen
            );
            ++nextState[id].order;
          }
        }
        if (action.screen.order > oldOrder) {
          if (oldScreen.order > oldOrder &&
            oldScreen.order <= action.screen.order) {
            nextState[id] = Object.assign(
              {},
              oldScreen
            );
            --nextState[id].order;
          }
        }
        if (action.screen.id === id) {
          nextState[id] = Object.assign(
            {},
            action.screen
          );
        }
      }
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
const isPutting = (state = false, action) => {
  switch (action.type) {
    case actions.SCREENS_PUT:
      return true;
    case actions.SCREENS_PUT_SUCCESS:
    case actions.SCREENS_PUT_ERROR:
      return false;
    default:
      return state;
  }
}
const putting = (state = null, action) => {
  switch (action.type) {
    case actions.SCREENS_PUT:
      return {
        screen: action.screen,
        down: action.down
      };
    case actions.SCREENS_PUT_SUCCESS:
    case actions.SCREENS_PUT_ERROR:
      return null;
    default:
      return state;
  }
}
const isPuttingError = (state = false, action) => {
  switch (action.type) {
    case actions.SCREENS_PUT:
      return false;
    case actions.SCREENS_PUT_SUCCESS:
      return false;
    case actions.SCREENS_PUT_ERROR:
      return true;
    default:
      return state;
  }
}
export const reducer = combineReducers({
  byId,
  allIds,
  isGetting,
  isGettingError,
  isPutting,
  putting,
  isPuttingError
});
// END
// ACCESSORS
export const get = (state) =>
  sortBy(state.allIds.map(id => state.byId[id]),
    o => o.order);
export const getIsGetting = (state) =>
  state.isGetting;
export const getIsGettingError = (state) =>
  state.isGettingError;
export const getIsPutting = (state) =>
  state.isPutting;
export const getPutting = (state) =>
  state.putting;
export const getIsPuttingError = (state) =>
  state.isPuttingError;
// END

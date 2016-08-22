import { combineReducers } from 'redux';
import * as screens from './screensReducer';
export default combineReducers({
  screens: screens.reducer
});
// TODO: RETHINK NAMING, ESP, ERROR
export const getScreens = (state) =>
  screens.get(state.screens);
export const getIsGettingScreens = (state) =>
  screens.getIsGetting(state.screens);
export const getIsGettingErrorScreens = (state) =>
  screens.getIsGettingError(state.screens);
export const getIsPuttingScreens = (state) =>
  screens.getIsPutting(state.screens);
export const getPuttingScreens = (state) =>
  screens.getPutting(state.screens);
export const getIsPuttingErrorScreens = (state) =>
  screens.getIsPuttingError(state.screens);

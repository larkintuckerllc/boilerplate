import { combineReducers } from 'redux';
import * as screens from './screensReducer';
export default combineReducers({
  screens: screens.reducer
});
export const getScreens = (state) =>
  screens.get(state.screens);
export const getIsGettingScreens = (state) =>
  screens.getIsGetting(state.screens);
export const getIsGettingErrorScreens = (state) =>
  screens.getIsGettingError(state.screens);

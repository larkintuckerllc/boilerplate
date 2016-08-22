import * as screens from '../api/screens';
const PREFIX = 'app/';
export const SCREENS_GET = `${PREFIX}SCREENS_GET`;
export const SCREENS_GET_SUCCESS = `${PREFIX}SCREENS_GET_SUCCESS`;
export const SCREENS_GET_ERROR = `${PREFIX}SCREENS_GET_ERROR`;
export const SCREENS_PUT = `${PREFIX}SCREENS_PUT`;
export const SCREENS_PUT_SUCCESS = `${PREFIX}SCREENS_PUT_SUCCESS`;
export const SCREENS_PUT_ERROR = `${PREFIX}SCREENS_PUT_ERROR`;
const screensGetRequest = () => ({
  type: SCREENS_GET
});
const screensGetSuccess = (screens) => ({
  type: SCREENS_GET_SUCCESS,
  screens
});
const screensGetError = () => ({
  type: SCREENS_GET_ERROR
});
const screensPutRequest = (screen, down) => ({
  type: SCREENS_PUT,
  screen: screen,
  down: down
});
const screensPutSuccess = (screen) => ({
  type: SCREENS_PUT_SUCCESS,
  screen
});
const screensPutError = () => ({
  type: SCREENS_PUT_ERROR
});
export const screensGet = () => (dispatch) => {
  dispatch(screensGetRequest());
  return(screens.get()
    .then(screens => dispatch(screensGetSuccess(screens)))
    .catch(() => dispatch(screensGetError()))
  );
}
export const screensPut = (id, description, order, down) => (dispatch) => {
  dispatch(screensPutRequest({ id, description, order }, down));
  return(screens.put(id, description, order)
    .then(screen => dispatch(screensPutSuccess(screen)))
    .catch(() => dispatch(screensPutError()))
  );
}

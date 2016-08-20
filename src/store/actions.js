import * as screens from '../api/screens';
const PREFIX = 'app/';
export const SCREENS_GET = `${PREFIX}SCREENS_GET`;
export const SCREENS_GET_SUCCESS = `${PREFIX}SCREENS_GET_SUCCESS`;
export const SCREENS_GET_ERROR = `${PREFIX}SCREENS_GET_ERROR`;
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
export const screensGet = () => (dispatch) => {
  dispatch(screensGetRequest());
  return(screens.get()
    .then(screens => dispatch(screensGetSuccess(screens)))
    .catch(() => dispatch(screensGetError()))
  );
}

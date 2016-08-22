import { connect } from 'react-redux';
import {
  getScreens,
  getIsGettingScreens,
  getIsGettingErrorScreens,
  getIsPuttingScreens,
  getPuttingScreens,
  getIsPuttingErrorScreens
} from '../../../store/reducers';
import {
  screensGet,
  screensPut
} from '../../../store/actions';
import ScreensView from '../components/ScreensView';
export default connect(
  state => ({
    screens: getScreens(state),
    isGetting: getIsGettingScreens(state),
    isGettingError: getIsGettingErrorScreens(state),
    isPutting: getIsPuttingScreens(state),
    putting: getPuttingScreens(state),
    isPuttingError: getIsPuttingErrorScreens(state)
  }),
  { screensGet, screensPut }
)(ScreensView);

import { connect } from 'react-redux';
import {
  getScreens,
  getIsGettingScreens,
  getIsGettingErrorScreens
} from '../../../store/reducers';
import {
  screensGet
} from '../../../store/actions';
import ScreensContainer from './ScreensContainer';
export default connect(
  state => ({
    screens: getScreens(state),
    isGetting: getIsGettingScreens(state),
    isGettingError: getIsGettingErrorScreens(state)
  }),
  { screensGet }
)(ScreensContainer);

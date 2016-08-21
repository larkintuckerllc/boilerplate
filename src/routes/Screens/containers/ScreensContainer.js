import React, { Component, PropTypes } from 'react';
import ScreensView from '../components/ScreensView';
export default class ScreensContainer extends Component {
  componentDidMount() {
    const { screensGet } = this.props;
    screensGet();
  }
  render() {
    return <ScreensView {...this.props} />;
  }
}
ScreensContainer.propTypes = {
  screensGet: PropTypes.func.isRequired
}

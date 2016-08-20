import React, { PropTypes } from 'react';
import ScreensView from '../components/ScreensView';
export default React.createClass({
  componentDidMount: function() {
    const { screensGet } = this.props;
    screensGet();
  },
  render: function() {
    return (
      <ScreensView
        {...this.props} />
      );
  },
  propTypes: {
    screensGet: PropTypes.func.isRequired
  }
});

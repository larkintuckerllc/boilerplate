import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
export default React.createClass({
  render: function() {
    const { store, history, routes } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} children={routes} />
      </Provider>
    );
  },
  propTypes: {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired
  }
});

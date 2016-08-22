// TODO: BETTER HANDLE OF WRAPPING
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { DragDropContext } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
const AppContainer = React.createClass({
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
export default DragDropContext(TouchBackend)(AppContainer);

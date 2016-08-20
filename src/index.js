import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { hashHistory } from 'react-router';
import './index.css';
import AppContainer from './containers/AppContainer'
import createRoutes from './routes/';
import createStore from './store/createStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
ReactDOM.render(
  <MuiThemeProvider>
    <AppContainer
      store={createStore()}
      history={hashHistory}
      routes={createRoutes()} />
  </MuiThemeProvider>,
  document.getElementById('root')
);

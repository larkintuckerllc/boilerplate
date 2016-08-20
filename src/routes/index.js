import CoreLayout from '../layouts/CoreLayout';
import Home from './Home';
import Screens from './Screens';
export default () => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    Screens
  ]
})

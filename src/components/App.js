import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import * as routes from '../constants/routes';
import * as DynamicImportRoutes from './DynamicImportRoutes';

import AppPublic from './AppPublic';
import AppAdmin from './AppAdmin';

import withAuthentication from './withAuthentication';

/*import ReallySmoothScroll from 'really-smooth-scroll';
ReallySmoothScroll.shim();
ReallySmoothScroll.config({
  mousewheelSensitivity: 6, // Default
  keydownSensitivity: 6 // Default (When you press arrow down/up key)
});*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faClock } from '@fortawesome/free-solid-svg-icons'

import smoothscroll from 'smoothscroll-polyfill';
import AnchorLink from 'react-anchor-link-smooth-scroll';
smoothscroll.polyfill();
library.add(faStroopwafel, faClock)

const App = () =>
    <Router>
    <div>
      <AppPublic/>
      <Route exact path={routes.SIGN_UP} component={() => <AppAdmin/>} />
      <Route exact path={routes.SIGN_IN} component={() => <AppAdmin/>} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <AppAdmin/>} />
      <Route exact path={routes.DASHBOARD} component={() => <AppAdmin/>} />
      <Route exact path={routes.USERS} component={() => <AppAdmin/>} />
      <Route exact path={routes.ACCOUNT} component={() => <AppAdmin/>} />
      <Route exact path={routes.ADMIN} component={() => <AppAdmin/>} />
    </div>
    </Router>

//export default App;
export default (App);
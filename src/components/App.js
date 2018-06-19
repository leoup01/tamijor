import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import '../styles.css';

import * as routes from '../constants/routes';
import * as DynamicImportRoutes from './DynamicImportRoutes';

import AppPublic from './AppPublic';
import AppAdmin from './AppAdmin';

import withAuthentication from './withAuthentication';

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
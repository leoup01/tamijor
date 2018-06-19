import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import '../styles.css';

import Navigation from '../components/Navigation';

import * as routes from '../constants/routes';
import * as DynamicImportRoutes from './DynamicImportRoutes';

import withAuthentication from './withAuthentication';

const AppAdmin = () =>
  <div>
    <Router>
    <div>
      <Route exact path={routes.SIGN_UP} component={() => <DynamicImportRoutes.SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <DynamicImportRoutes.SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <DynamicImportRoutes.PasswordForgetPage />} />
      <Route exact path={routes.DASHBOARD} component={() => <DynamicImportRoutes.DashboardPage />} />
      <Route exact path={routes.USERS} component={() => <DynamicImportRoutes.UsersPage />} />
      <Route exact path={routes.ACCOUNT} component={() => <DynamicImportRoutes.AccountPage />} />
      <Route exact path={routes.ADMIN} component={() => <DynamicImportRoutes.AdminPage />} />
    </div>
    </Router>
  </div>
  

//export default App;
export default withAuthentication(AppAdmin);
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import '../styles.css';

import Navigation from './Navigation';
import LandingPage from '../routes/Landing';
import SignUpPage from '../routes/SignUp';
import SignInPage from '../routes/SignIn';
import PasswordForgetPage from '../routes/PasswordForget';
import DashboardPage from '../routes/Dashboard';
import UsersPage from '../routes/Users';
import AdminPage from '../routes/Admin';
import AccountPage from '../routes/Account';

import * as routes from '../constants/routes';

import withAuthentication from './withAuthentication';

const App = () =>
  <Router>
    <div>
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.DASHBOARD} component={() => <DashboardPage />} />
      <Route exact path={routes.USERS} component={() => <UsersPage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.ADMIN} component={() => <AdminPage />} />
    </div>
  </Router>

//export default App;
export default withAuthentication(App);
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import '../styles.css';
import '../slider.css';

import * as routes from '../constants/routes';
import * as DynamicImportRoutes from './DynamicImportRoutes';

import withAuthentication from './withAuthentication';

const AppPublic = () =>
  <Router>
    <div>
      <Route exact path={routes.LANDING} component={() => <DynamicImportRoutes.LandingPage />} />
    </div>
  </Router>

//export default App;
export default withAuthentication(AppPublic);
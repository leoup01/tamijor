import React from 'react';
import { Component } from 'react';

//import * as routes from '../constants/routes';

import DynamicImport from './DynamicImport';
import Loader from 'react-loader-spinner';

const Loader1 = () => (
  <div className="centerV">
    <Loader 
      type="Puff"
      color="#485058"
      height="20em" 
      width="20em"
    />
  </div>
);

const LandingPage = (props) => (
  <DynamicImport load={()=>import('../routes/Landing')}>
    {(Component) => Component === null
      ? <Loader1/>
      : <Component {...props}/> }
  </DynamicImport>
)

const SignUpPage = (props) => (
  <DynamicImport load={()=>import('../routes/SignUp')}>
    {(Component) => Component === null
      ? <Loader1/>
      : <Component {...props}/> }
  </DynamicImport>
)

const SignInPage = (props) => (
  <DynamicImport load={()=>import('../routes/SignIn')}>
    {(Component) => Component === null
      ? <Loader1/>
      : <Component {...props}/> }
  </DynamicImport>
)

const PasswordForgetPage = (props) => (
  <DynamicImport load={()=>import('../routes/PasswordForget')}>
    {(Component) => Component === null
      ? <Loader1/>
      : <Component {...props}/> }
  </DynamicImport>
)

const DashboardPage = (props) => (
  <DynamicImport load={()=>import('../routes/Dashboard')}>
    {(Component) => Component === null
      ? <Loader1/>
      : <Component {...props}/> }
  </DynamicImport>
)

const UsersPage = (props) => (
  <DynamicImport load={()=>import('../routes/Users')}>
    {(Component) => Component === null
      ? <Loader1/>
      : <Component {...props}/> }
  </DynamicImport>
)

const AdminPage = (props) => (
  <DynamicImport load={()=>import('../routes/Admin')}>
    {(Component) => Component === null
      ? <Loader1/>
      : <Component {...props}/> }
  </DynamicImport>
)

const AccountPage = (props) => (
  <DynamicImport load={()=>import('../routes/Account')}>
    {(Component) => Component === null
      ? <Loader1/>
      : <Component {...props}/> }
  </DynamicImport>
)


export {
  LandingPage,
  SignUpPage,
  SignInPage,
  PasswordForgetPage,
  DashboardPage,
  UsersPage,
  AdminPage,
  AccountPage,
};
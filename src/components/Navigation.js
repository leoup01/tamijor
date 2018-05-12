import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import * as routes from '../constants/routes';
import SignOutButton from '../routes/SignOut';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';


const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink href={routes.DASHBOARD}>Dashboard</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href={routes.USERS}>Usuarios</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href={routes.ACCOUNT}>Mi cuenta</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href={routes.ADMIN}>Admin</NavLink>
    </NavItem>
    <NavItem>
      <SignOutButton />
    </NavItem>
  </Nav>

const NavigationNonAuth = () =>
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink href={routes.SIGN_IN}>Sign In</NavLink>
    </NavItem>
  </Nav>

  const NavigationAuth2 = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.DASHBOARD}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><Link to={routes.ADMIN}>Admin</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth2 = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

export default class NavbarCustom extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <b><NavbarBrand href="/">Home</NavbarBrand></b>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {Navigation()}
          </Collapse>
        </Navbar>
    </div>
    
    );
  }
}
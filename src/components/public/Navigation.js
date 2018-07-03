import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

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
      <div className="header-fixed">
        <Navbar dark expand="md">
          <b><NavbarBrand href="#">Home</NavbarBrand></b>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <AnchorLink href='#eventos'>Eventos</AnchorLink>
              </NavItem>
              <NavItem>
                <AnchorLink href='#nosotros'>Nosotros</AnchorLink>
              </NavItem>
              <NavItem>
                <AnchorLink href='#servicios'>Servicios</AnchorLink>
              </NavItem>
              <NavItem>
                <AnchorLink href='#testimonios'>Testimonios</AnchorLink>
              </NavItem>
              <NavItem>
                <AnchorLink href='#contacto'>Contacto</AnchorLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
    
    );
  }
}
import React from 'react';
import { Link } from 'react-router-dom';


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
      <div>
        <Navbar dark expand="md">
          <b><NavbarBrand href="/">Home</NavbarBrand></b>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#seccionEventos">Eventos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#seccionNosotros">Nosotros</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#seccionServicios">Servicios</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#seccionContacto">Contacto</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
    
    );
  }
}
import React from 'react';
import { Row, Col } from 'reactstrap';
import logo1 from '../images/momentostamijorlogo.png';

const Footer = (props) => {
  return (
  	<footer className="text-center">
  		<Row>
        <Col md="3">
          <img src={logo1} alt="Momentos Tamijor"/>
        </Col>
  			<Col md="6">
        		<p>Copyright © {(new Date().getFullYear())} ROBOTICO DEV, todos los derechos reservados.</p>
            <p>Momentos Tamijor</p>
  			</Col>
        <Col md="3">
        </Col>
  		</Row>
  	</footer>
  );
};

export default Footer;
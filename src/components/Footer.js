import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = (props) => {
  return (
  	<footer className="text-center">
  		<Row>
  			<Col md="12">
        		<p>©Copyright by Universidad Nacional de Costa Rica.</p>
        		<p>2018</p>
  			</Col>
  		</Row>
  	</footer>
  );
};

export default Footer;
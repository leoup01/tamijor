import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faBeer from '@fortawesome/fontawesome-free-solid/faBeer'
import '../../section-normal.css';
const AboutUs = (props) => {
  return (
        <section id="eventos">
            <Container>
                <Row>
                    <Col md="12">
                        <div class="wel_header">
                            <h2>Eventos</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
  );
};

export default AboutUs;
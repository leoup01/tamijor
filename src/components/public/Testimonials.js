import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faBeer from '@fortawesome/fontawesome-free-solid/faBeer'
import '../../section-parallax.css';

const Testimonials = (props) => {
  return (
        <section class="section-testimonials parallax overlay section-padding" id="testimonios">
        <Container>
            <Row>
                <Col md="12">
                    <div class="wel_header">
                        <h2>Testimonios</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Testimonials;
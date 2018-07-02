import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faBeer from '@fortawesome/fontawesome-free-solid/faBeer'
import '../../section-parallax.css';

import SliderTestimonials from './SliderTestimonials';
//import '../../testimonials.css';

const Testimonials = (props) => {
  return (
        <section class="section-testimonials parallax overlay section-padding" id="testimonios">
        <Container>
            <ScrollAnimation animateIn="fadeIn">
                <Row>
                    <Col md="12">
                        <div class="wel_header">
                            <h2>Testimonios</h2>
                        </div>
                    </Col>
                </Row>
            </ScrollAnimation>
            <ScrollAnimation animateIn="zoomIn">
                <SliderTestimonials/>
            </ScrollAnimation>
        </Container>
    </section>
  );
};

export default Testimonials;
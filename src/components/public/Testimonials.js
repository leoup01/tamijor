import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faBeer from '@fortawesome/fontawesome-free-solid/faBeer'
import '../../section-parallax.css';

import SliderTestimonials from './SliderTestimonials';
//import '../../testimonials.css';

const Testimonials3 = (props) => {
  return (
        <section id="testimonial">
            <div class="testimonial_overlay">
            </div>
            <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="testimonial_header text-center">
                                <h2>testimonials</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <section id="carousel">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div class="carousel slide" id="fade-quote-carousel" data-ride="carousel" data-interval="3000">
                                        <ol class="carousel-indicators">
                                            <li data-target="#fade-quote-carousel" data-slide-to="0" class="active"></li>
                                            <li data-target="#fade-quote-carousel" data-slide-to="1"></li>
                                        </ol>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
            </div>
        </section>
  );
};


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
            <SliderTestimonials/>
        </Container>
    </section>
  );
};

export default Testimonials;
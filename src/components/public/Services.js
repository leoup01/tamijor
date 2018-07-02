import React from 'react';
import { Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import '../../section-parallax.css';

const Services = (props) => {
  return (
  	<section class="section-services parallax overlay section-padding" id="servicios">
        <div class="container">
            <ScrollAnimation animateIn="fadeIn">
                <Row>
                    <Col md="12">
                        <div class="wel_header">
                            <h2>Servicios</h2>
                        </div>
                    </Col>
                </Row>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInX">
            <Row>

                <div class="col-sm-12 col-md-4">
                    <div class="services-table">
                        <h3 class="text-uppercase price-title">Servicio 1</h3>
                        <hr/>
                        <ul class="list-unstyled">
                            <li><strong class="amount">$ <span class="big">20</span></strong>/Month</li>
                            <li>100 MB Disk Space</li>
                            <li>2 Subdomains</li>
                            <li>5 Email Accounts</li>
                            <li>Webmail Support</li>
                            <li>Customer Support 24/7</li>
                        </ul>
                        <hr/>
                        <a href="#" class="button">Purchase</a>
                    </div>
                </div>


                <div class="col-sm-12 col-md-4">
                    <div class="services-table active">
                        <span class="services-info"><span class="ti-crown"></span></span>
                        <h3 class="text-uppercase price-title">Servicio 2</h3>
                        <hr/>
                        <ul class="list-unstyled">
                            <li><strong class="amount">$ <span class="big">39</span></strong>/Month</li>
                            <li>100 MB Disk Space</li>
                            <li>2 Subdomains</li>
                            <li>5 Email Accounts</li>
                            <li>Webmail Support</li>
                            <li>Customer Support 24/7</li>
                        </ul>
                        <hr/>
                        <a href="#" class="button">Purchase</a>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class="services-table">
                        <h3 class="text-uppercase price-title">Servicio 3</h3>
                        <hr/>
                        <ul class="list-unstyled">
                            <li><strong class="amount">$ <span class="big">59</span></strong>/Month</li>
                            <li>100 MB Disk Space</li>
                            <li>2 Subdomains</li>
                            <li>5 Email Accounts</li>
                            <li>Webmail Support</li>
                            <li>Customer Support 24/7</li>
                        </ul>
                        <hr/>
                        <a href="#" class="button">Purchase</a>
                    </div>
                </div>
            </Row>
            </ScrollAnimation>
        </div>
    </section>
  );
};

export default Services;
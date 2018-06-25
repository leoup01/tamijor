import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faBeer from '@fortawesome/fontawesome-free-solid/faBeer'
import '../../aboutUs.css';

const AboutUs = (props) => {
  return (
        <section id="nosotros">
            <Container>
                <div class="row">
                    <div class="col-md-12">
                        <div class="wel_header">
                            <h2>Sobre Nosotros</h2>
                            <p>La librería virtual afrece gran variedad de opciones para los amantes de la lectura. Nuestra página web cuenta con las siguientes caracteristicas.</p>
                        </div>
                    </div>
                </div>
                <Row>
                    <Col sm="12" md="6">
                        <div class="item">
                            <div class="single_item">
                                <div class="wel_header">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis, magna et rutrum tincidunt, felis lorem maximus purus, a laoreet magna nunc nec elit. Aliquam interdum velit eu vehicula tincidunt. Integer suscipit non magna non elementum. Nam in tortor et lacus aliquam porta vulputate at neque. Sed justo risus, faucibus id nunc sed, scelerisque lobortis turpis. Phasellus congue consectetur nibh, vitae consequat nibh efficitur vel. Suspendisse potenti. Suspendisse non lacinia mauris, posuere aliquet nunc. In hac habitasse platea dictumst. Nulla non ipsum sollicitudin, hendrerit tortor ut, consectetur risus. Maecenas suscipit, est ut lacinia dapibus, nulla leo faucibus purus, eget iaculis neque libero eget dolor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="6">
                        <div class="item">
                            <div class="single_item">
                                <div class="item_list">
                                    <div class="nosotros_icon">
                                        <FontAwesomeIcon icon="clock" size="4x" />
                                    </div>
                                    <h4>Nuestro Horario</h4>
                                    <p>Puedes comprar desde la cualquier lugar y usando cualquier dispositivo.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
  );
};

export default AboutUs;
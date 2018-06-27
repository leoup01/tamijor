import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faBeer from '@fortawesome/fontawesome-free-solid/faBeer'
import Mailto from 'react-mailto.js';
import '../../aboutUs.css';

const Contact = (props) => {
  return (
        <section id="nosotros">
            <Container>
                <div class="row">
                    <div class="col-md-12">
                        <div class="wel_header">
                            <h2>Contactenos</h2>
                            <p>La librería virtual afrece gran variedad de opciones para los amantes de la lectura. Nuestra página web cuenta con las siguientes caracteristicas.</p>
                            <Mailto
                                secure={true}
                                to='leocortesq@gmail.com'
                                subject="Some email subject"
                                body={[
                                    "This is the body of your message",
                                    "Multilined also"
                                ].join('\n')}
                            >
                                email us
                            </Mailto>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
  );
};

export default Contact;
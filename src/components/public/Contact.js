import React, { Component } from 'react';
import { Row, Col, Container, Input, FormGroup, Button } from 'reactstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import faBeer from '@fortawesome/fontawesome-free-solid/faBeer'
import Map from './Map';
import '../../section-normal.css';
import '../../social.css';
import 'font-awesome/css/font-awesome.min.css';

const Contact = (props) => {
  return (
        <section id="contacto">
            <Container>
                <Row>
                    <Col md="12">
                        <div class="wel_header">
                            <h2>Contactenos</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="6">
                        <Row>
                          <h3>Poner info de contacto</h3>
                        </Row>
                        <Row>
                          <SocialMedia/>
                        </Row>
                    </Col>
                    <Col sm="12" md="6">
                        <ContactForm/>
                    </Col>
                </Row>
            </Container>
            <Map/>
        </section>
  );
};

const SocialMedia = (props) => {
  return (
        <div class="social">
          <h2>Nuestras redes sociales</h2>
          <button class="icon-btn twitter"> 
            <a class="link" href="https://twitter.com/" target="_blank">
              <i class="fa fa-twitter"></i>
            </a>
          </button>
          <button class="icon-btn facebook"> 
            <a class="link" href="https://www.facebook.com/" target="_blank">
              <i class="fa fa-facebook"></i> 
            </a>
        </button>
          <button class="icon-btn google-plus"> 
            <a class="link" href="https://plus.google.com/" target="_blank">
              <i class="fa fa-google-plus"></i> 
            </a>
          </button>
          <button class="icon-btn instagram"> 
            <a class="link" href="https://www.instagram.com/"  target="_blank">
              <i class="fa fa-instagram"></i>
            </a>
          </button>
          <button class="icon-btn github"> 
            <a class="link" href="https://github.com/" target="_blank">
              <i class="fa fa-github"></i>
            </a>
          </button>
        </div>
  );
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
    to: '',
    name: '',
  email: '',
  password: '',
  message: '',
  error: null,
};

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
        to,
        name,
      email,
      password,
      message,
    } = this.state;
    console.log("click enviar");
    console.log(this.state);
    //Enviar

    event.preventDefault();
  }

  render() {
    const {
        to,
      name,
      email,
      password,
      message,
      error,
    } = this.state;

    const isInvalid =
      name === '' ||
      message === '' ||
      email === '';

      console.log(this.state);

    return (
      <form onSubmit={this.onSubmit}>
        <h2>Formulario de contacto</h2>
        <FormGroup> 
        <Input
          value={name}
          onChange={event => this.setState(byPropKey('name', event.target.value))}
          type="text"
          placeholder="Tu nombre"
        />
        </FormGroup>
        <FormGroup> 
        <Input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Tu correo electrónico"
        />
        </FormGroup> 
        <FormGroup> 
        <Input
          value={message}
          onChange={event => this.setState(byPropKey('message', event.target.value))}
          type="textarea"
          rows= "5"
          placeholder="Mensaje"
        />
        </FormGroup> 
        <div className="center-flex">
          <Button disabled={isInvalid} type="submit" className="button button-1 center-flex">
            Enviar
          </Button>
        </div>
        

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}



export default Contact;
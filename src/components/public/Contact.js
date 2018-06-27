import React, { Component } from 'react';
import { Row, Col, Container, Input, FormGroup, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faBeer from '@fortawesome/fontawesome-free-solid/faBeer'
import Map from './Map';
import '../../section-normal.css';


class Contact extends React.Component {
  constructor(props) {
      super(props);

    }


  render() {
        return(  
          <section id="contacto">
            <Container>
                <Row>
                    <Col md="12">
                        <div class="wel_header">
                            <h2>Contactenos</h2>
                            <p>La librería virtual afrece gran variedad de opciones para los amantes de la lectura. Nuestra página web cuenta con las siguientes caracteristicas.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="6">

                    </Col>
                    <Col sm="12" md="6">
                        <ContactForm/>
                    </Col>
                </Row>
            </Container>
            <Map/>
        </section>
      );
  }
}

const Contact2 = (props) => {
  return (
        <section id="contacto">
            <Container>
                <Row>
                    <Col md="12">
                        <div class="wel_header">
                            <h2>Contactenos</h2>
                            <p>La librería virtual afrece gran variedad de opciones para los amantes de la lectura. Nuestra página web cuenta con las siguientes caracteristicas.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="6">

                    </Col>
                    <Col sm="12" md="6">
                        <ContactForm/>
                    </Col>
                </Row>
            </Container>
            <Row>
              <Map/>

            </Row>
        </section>
  );
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
    to: '',
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
      email,
      password,
      message,
      error,
    } = this.state;

    const isInvalid =
      message === '' ||
      email === '';

      console.log(this.state);

    return (
      <form onSubmit={this.onSubmit}>
        <h2>Formulario de contacto</h2>
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
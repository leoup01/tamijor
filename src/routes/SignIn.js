import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faBeer from '@fortawesome/fontawesome-free-solid/faBeer'
import '../login.css';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import { Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

const SignInPage = ({ history }) =>
  <div className="container-login">
    <div className="box-login">
      <SignInForm history={history} />
      <hr/>
      <div className="center-flex">
        <PasswordForgetLink />
      </div>
      <div className="center-flex">
        <SignUpLink />
      </div>
    </div>
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.DASHBOARD);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <span className="form-logo">
          <FontAwesomeIcon icon={faBeer} size="md"/>
        </span>
        <h1 className="title-1">Login</h1>
        <FormGroup> 
        <Input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Correo electrónico"
        />
        </FormGroup> 
        <FormGroup> 
        <Input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Contraseña"
        />
        </FormGroup> 
        <div className="center-flex">
          <Button disabled={isInvalid} type="submit" className="button button-1 center-flex">
            Ingresar
          </Button>
        </div>
        

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
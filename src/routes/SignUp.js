import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import withAuthorization from '../components/withAuthorization';
import AuthUserContext from '../components/AuthUserContext';
import Navigation from '../components/Navigation';
import * as routes from '../constants/routes';
import { auth, db } from '../firebase';
import { alertSimple } from '../components/Alerts';
import { Button, Container, FormGroup, Label, Input } from 'reactstrap';

const SignUpPage = ({history}) => (
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <Navigation />
        <Container>
        <h1>Registro de usuarios</h1>
        <SignUpForm history={history} userAdmin={authUser.userInfo.email} />
        </Container>
      </div>
  }
  </AuthUserContext.Consumer>
 );

const SignUpPage2 = ({history}) => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm history={history}/>
  </div>
 );

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  rol:'Normal',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
    console.log(this.props);
    /*let currentUser = auth.doGetCurrentUser();
    console.log(currentUser);
    var credential;

    // Prompt the user to re-provide their sign-in credentials

    currentUser.reauthenticateWithCredential(credential).then(function() {
      console.log("User re-authenticated.")
      // User re-authenticated.
    }).catch(function(error) {
      console.log("User no re-authenticated.")
      // An error happened.
    });*/
    //auth.doLinkCredentials();
  }

  onSubmit = (event) => {
  	const {
      username,
      email,
      passwordOne,
      rol
    } = this.state;

    const {
      history,
    } = this.props;


    let currentUser = auth.doGetCurrentUser();
    console.log(currentUser);
    //auth.doLinkCredentials();
    //auth.doCreateUserWithEmailAndPassword(email, passwordOne, username)
    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      //.then(authUser => authUser.updateProfile({displayName: username}), authUser)
      .then(authUser => {
        //authUser.updateProfile({displayName: username, role: "ADMIN"});
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, username, email, rol)
          .then(() => {

            this.setState(() => ({ ...INITIAL_STATE }));
            alertSimple('success', 'Se ha agregado correctamente la informacion del usuario');
            //history.push(routes.DASHBOARD);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
            alertSimple('danger', 'No se ha agregado correctamente la informacion del usuario');
          });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

      console.log(this.state);
    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label>Nombre de usuario</Label>
          <Input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Nombre de usuario"
          />
        </FormGroup>
        <FormGroup>
          <Label>Correo electrónico</Label>
          <Input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Correo electrónico"
          />
        </FormGroup>
        <FormGroup>
          <Label>Contraseña</Label>
          <Input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Contraseña"
          />
        </FormGroup>
        <FormGroup>
          <Label>Contraseña (verificación)</Label>
          <Input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
          />
        </FormGroup>
        <FormGroup>
          <Label>Rol</Label>
          <Input type="select" name="select" id="rolInput" onChange={event => this.setState(byPropKey('rol', event.target.value))}>
            <option>Normal</option>
            <option>Administrador</option>
          </Input>
        </FormGroup>
        <button disabled={isInvalid} type="submit">
          Registrar
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    ¿todavía no tiene una cuenta?
    {' '}
    <Link to={routes.SIGN_UP}>Registrarse</Link>
  </p>

const SignUpLinkButton = () =>
  <Button href={routes.SIGN_UP} className="button button-1">Agregar nuevo</Button>

//export default SignUpPage;

const authCondition = (authUser) => !!authUser;
const roleCondition = (role) => (role==='Administrador')? true : false;

export default withAuthorization(authCondition)(roleCondition)(withRouter(SignUpPage));
//export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
  SignUpLinkButton,
};
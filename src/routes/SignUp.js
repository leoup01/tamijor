import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as routes from '../constants/routes';
import { auth, db } from '../firebase';

import { Button } from 'reactstrap';

const SignUpPage = ({history}) => (
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
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE}
  }

  onSubmit = (event) => {
  	const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    //auth.doCreateUserWithEmailAndPassword(email, passwordOne, username)
    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      //.then(authUser => authUser.updateProfile({displayName: username}), authUser)
      .then(authUser => {
        //authUser.updateProfile({displayName: username, role: "ADMIN"});
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, username, email, 'admin')
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.DASHBOARD);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
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

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Nombre de usuario"
        />
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Correo electrónico"
        />
        <input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Contraseña"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
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
export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
  SignUpLinkButton,
};
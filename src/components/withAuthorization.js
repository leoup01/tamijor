import React from 'react';

import { withRouter } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import { firebase } from '../firebase';
import * as routes from '../constants/routes';

const withAuthorization = (authCondition) => (roleCondition) => (Component) => {
  class WithAuthorization extends React.Component {
    //al cambiar el estado del usuario de firebase se comprueba si existe, si no se redirecciona al login
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        //console.log(authUser);
        if (!authCondition(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }
      });
    }

    consoles = (authUser)=>{
        console.log(authUser.userRole);
        if (authUser.userInfo) {
          console.log(authUser.userInfo.email);
        }
        console.log(authUser);
    }

    //comprueba si existe el usuario y si cumple con los permisos para ver la pagina
    //en un inicio el userRole es unset, luego se toma del contexto
    checkAuth = (authUser) =>{
      return ((authUser && roleCondition(authUser.userRole)) ? <Component /> : (authUser.userRole==='unset')? null : this.props.history.push(routes.SIGN_IN) );
      //return ((authUser && roleCondition(authUser.userRole)) ? <Component /> : this.props.history.push(routes.SIGN_IN));
    }

    //{authUser => authUser ? <Component /> : null}
    render() {
      return (
        <div>
        <AuthUserContext.Consumer>
          {authUser => this.checkAuth(authUser)}
        </AuthUserContext.Consumer>
        <AuthUserContext.Consumer>
          {authUser => this.consoles(authUser)}
        </AuthUserContext.Consumer>
        </div>

      );
    }
  }

  //return WithAuthorization;
  return withRouter(WithAuthorization);
}

export default withAuthorization;
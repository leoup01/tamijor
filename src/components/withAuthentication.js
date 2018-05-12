import React from 'react';
import AuthUserContext from './AuthUserContext';
import { firebase } from '../firebase';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {

  	constructor(props) {
      super(props);
      this.state = {
        authUser: null,
        infoUser: 'xxx',
      };
      console.log(this.state);
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser: authUser }))
          : this.setState(() => ({ authUser: null }));
      });
    }

    render() {
    	const { authUser } = this.state;
      console.log(authUser);
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  }

  return WithAuthentication;
}

export default withAuthentication;
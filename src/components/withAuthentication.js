import React from 'react';
import AuthUserContext from './AuthUserContext';
import { firebase } from '../firebase';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {

  	constructor(props) {
      super(props);
      this.state = {
        userInfo: null,
        userRole: 'unset',
      };
      console.log(this.state);
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.updateState(authUser)
          : this.setState(() => ({ userInfo: null }));
      });
    }

    updateState = (au) =>{
      //console.log(au.authUser);
      this.setState({
        userInfo: au,
        userRole: 'ADMIN',
      });
    }

    /*
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });
    }*/

    render() {
    	const { authUser } = this.state;
      const infoUser = this.state.infoUser;
      const v = {infoUser,authUser};
      //console.log(infoUser);
      //console.log(v);
      console.log(this.state);
      return (
        <AuthUserContext.Provider value={this.state}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  }

  return WithAuthentication;
}

export default withAuthentication;
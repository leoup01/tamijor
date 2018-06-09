import React from 'react';
import AuthUserContext from './AuthUserContext';
import { firebase, db } from '../firebase';

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
      console.log(au.uid);
      this.setState({
        userInfo: au
        //userRole: 'ADMIN',
      });
      this.getUserRol(au.uid);
      
    }

    getUserRol = (au) => {
        console.log("getUserRol");
        db.onceGetUserRole(au).then(snapshot => this.setState(() => ({ userRole: snapshot.val() })) );
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
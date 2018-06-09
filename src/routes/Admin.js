import React from 'react';
import withAuthorization from '../components/withAuthorization';

import AuthUserContext from '../components/AuthUserContext';

const AdminPage = () =>

  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Admin</h1>
        <p>Restricted area! Only users with the admin rule are authorized.</p>
        <br/>
        <p>{authUser.infoUser}</p>
        <p>{authUser.email}</p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    }
  </AuthUserContext.Consumer>

//const authCondition = (authUser) => check(authUser);
const authCondition = (authUser) => !!authUser;
//const authCondition = (authUser) => !!authUser && authUser.userRole === 'ADMIN';

const check = (authUser) => {
	console.log(authUser);
	return (!!authUser);
}
const roleCondition = (role) => (role==='Administrador')? true : false;

export default withAuthorization(authCondition)(roleCondition)(AdminPage);
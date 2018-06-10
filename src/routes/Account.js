import React from 'react';
import Navigation from '../components/Navigation';
import AuthUserContext from '../components/AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import DeleteMyAccount from '../components/DeleteMyAccount';
import withAuthorization from '../components/withAuthorization';

import { Row, Col, Container } from 'reactstrap';

const getEmail = (authUser) =>
  (authUser)?( (authUser.userInfo)?(authUser.userInfo.email):("NO infoUser") ):( "NO authUser" );
const getEmail2 = (authUser) =>{
  let res="";
  (authUser)?( (authUser.userInfo)?(res=authUser.userInfo.email):(res="NO infoUser") ):( res= "NO authUser" );
  console.log(res);
  //(authUser)?((authUser.infoUser)?(authUser.infoUser.email):("NO infoUser")):("NO authUser");
}
const AccountPage = () =>
  <div>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
      	<Navigation />
    	<hr/>
      <Container>
        <Row>
          <Col sm="12" md="8" lg="8" xl="8">
            <div className="box-1">
              <h1>Información de la cuenta</h1>
              <h3>Nombre de usuario: {getEmail(authUser)}</h3>
              <h3>Correo electrónico: {getEmail(authUser)}</h3>
              <h3>Rol: {authUser.userRole}</h3>
            </div>
            
          </Col>
          <Col sm="12" md="4" lg="4" xl="4">
            <div className="box-1">
              <div>
                <h2>Reestablecer contraseña</h2>
                <PasswordForgetForm />
              </div>
              <div>
                <h2>Cambiar contraseña</h2>
                <PasswordChangeForm />
              </div>
              <div>
                <h2>Eliminar mi cuenta</h2>
                <DeleteMyAccount/>
              </div>
            </div>
          </Col>
        </Row>
        </Container>
        
        
        
      </div>
    }
  </AuthUserContext.Consumer>
  <AuthUserContext.Consumer>
    {authUser => {
      console.log(authUser);
      //console.log(authUser.userInfo[0]);
      }
    }
  </AuthUserContext.Consumer>
  </div>

  const show = (authUser) =>{
    console.log(authUser);
    console.log(authUser.infoUser);
  }

//export default AccountPage;
const authCondition = (authUser) => !!authUser;

const authCondition2 = (authUser) => !!authUser && authUser.infoUser === 'ADMIN';
console.log(authCondition2());

const roleCondition = (role) => true;

export default withAuthorization(authCondition)(roleCondition)(AccountPage);
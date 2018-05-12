import React from 'react';
import Navigation from '../components/Navigation';
import AuthUserContext from '../components/AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import DeleteMyAccount from '../components/DeleteMyAccount';
import withAuthorization from '../components/withAuthorization';

import { Row, Col, Container } from 'reactstrap';

const AccountPage = () =>
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
              <h3>Nombre de usuario: {authUser.username}</h3>
              <h3>Correo electrónico: {authUser.email}</h3>
              <h3>Rol: {authUser.role}</h3>
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

//export default AccountPage;
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import withAuthorization from '../components/withAuthorization';
import { db } from '../firebase';
import { auth } from '../firebase';
import { alertSimple, alertConfirmDelete } from '../components/Alerts';
import { SignUpLinkButton } from './SignUp';

//import * as admin from 'firebase-admin';
//import serviceAccount from '../constants/eventostamijor-firebase-adminsdk-h46ue-39783dbf4c';

import { Button, Form, FormGroup, Label, Input, FormText, Row, Table, Container } from 'reactstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
/*
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://eventostamijor.firebaseio.com'
});*/

class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () =>{
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  deleteUser = (uid) =>{
    //alertConfirmDelete2('warning', 'Confirmación de eliminación de usuario').then(()=>{console.log("paso")});
    MySwal.fire({
        position: 'top-end',
        title: 'Confirmación de eliminación de usuario',
        text: "Esta acción no se puede revertir",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
          if (result.value) {
            this.deleteUserDo(uid);
        }
    });
  }

  deleteUserDo = (uid) =>{
    db.doRemove('users', uid).then(() => {
            //this.setState(() => ({ users: this.state.users }));
            this.getAllUsers();
            alertSimple('success', 'Se ha eliminado correctamente la informacion relacionada al usuario');
          }).catch(error => {
            alertSimple('danger', 'No se ha eliminado correctamente la informacion relacionada al usuario');
          });
  }

  deleteUser2 = (userKey) =>{
    console.log("DELETE");
    console.log(userKey);
    auth.doGetUser(userKey);
    /*
    auth.doRemoveUser(userKey)
      .then(() => {
        db.doRemove('users', userKey)
          .then(() => {
            alertSimple('success', 'Se ha eliminado correctamente la informacion relacionada al usuario');
          })
          .catch(error => {
            alertSimple('danger', 'No se ha eliminado correctamente la informacion relacionada al usuario');
          });
      })
      .then(()=>{
          alertSimple('success', 'Se ha eliminado correctamente el usuario');
      })
      .catch(error => {
        //this.setState(byPropKey('error', error));
        alertSimple('danger', 'No se ha eliminado correctamente el usuario');
      });
      */
  }

  UsersTable = ({users}) =>
  <Table striped>
        <thead>
          <tr>
            <th>Nombre de usuario</th>
            <th>Email</th>
            <th>Role</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(users).map(key =>
            <tr key={key}>
              <td>{users[key].username}</td>
              <td>{users[key].email}</td>
              <td>{users[key].role}</td>
              <td>
              <div>
              <Button className="button-sm button-2">Detalles</Button>
              <Button className="button-sm button-5">Editar</Button>
              <Button onClick={()=>this.deleteUser(key)} className="button-sm button-3">Eliminar</Button>
              </div>
              </td>
            </tr>
        )}
        </tbody>
      </Table>

  render() {
    const { users } = this.state;  
    console.log(users);  	
    return (
      <div>
        <Navigation />
        <Container>
        <h1>Sección de usuarios</h1>
        <Row>
          <SignUpLinkButton />
        	<Button className="button button-1">Agregar nuevo</Button>
        </Row>
        <p>The Users Page is accessible by every signed in user.</p>
      	{ !!users && <UserList users={users} /> }
      	{ !!users && <this.UsersTable users={users} /> }
        </Container>
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

  
const authCondition = (authUser) => !!authUser;
const roleCondition = (role) => true;

export default withAuthorization(authCondition)(roleCondition)(UsersPage);
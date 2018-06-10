import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../firebase';

import { Button } from 'reactstrap';
import { alertSimple } from '../components/Alerts';

import { Row, Col, Container } from 'reactstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

class DeleteMyAccount extends Component {
  constructor(props) {
    super(props);
  }

  delete = () => {
    MySwal.fire({
        position: 'top-end',
        title: 'Confirmación de eliminación de cuenta de usuario',
        text: "Esta acción no se puede revertir",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
          if (result.value) {
            console.log("DELETE MY ACCOUNT");
            auth.doDeleteMyAccount();
        }
    });
    
  }

  delete2 = () => {
    console.log("DELETE MY ACCOUNT");
    auth.doDeleteMyAccount();
  }

  deleteUser = (uid) =>{
    //alertConfirmDelete2('warning', 'Confirmación de eliminación de usuario').then(()=>{console.log("paso")});
    
  }

  render() {
    return (
    	<div>
        <Button onClick={this.delete} className="button button-5 form-control">
            Eliminar mi cuenta
        </Button>
      </div>
    );
  }
}


export default DeleteMyAccount;

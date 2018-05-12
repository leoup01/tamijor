import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../firebase';

import { Button } from 'reactstrap';
import { alertSimple } from '../components/Alerts';


class DeleteMyAccount extends Component {
  constructor(props) {
    super(props);
  }

  delete = () => {
    console.log("DELETE MY ACCOUNT");
    auth.doDeleteMyAccount();
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

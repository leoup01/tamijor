import React from 'react';

import { auth } from '../firebase';
import { Button } from 'reactstrap';

const SignOutButton = () =>
  <Button
    className="button-sm button-5"
    onClick={auth.doSignOut}
  >
    Cerrar sesión
  </Button>

export default SignOutButton;
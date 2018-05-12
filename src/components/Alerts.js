import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const alertSimple = (alertType, alertTitle) => {
  	console.log("ALERT TEST");
  	MySwal.fire({
	  title: <p>Hello World</p>,
	  footer: 'Copyright 2018',
	  position: 'top-end',
	  type: alertType,
	  title: alertTitle,
	  showConfirmButton: false,
	  timer: 2500
	});
 }


export {
  alertSimple,
};
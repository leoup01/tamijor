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

 const alertConfirmDelete = (alertType, alertTitle) => {
  	//console.log("ALERT TEST");
  	MySwal.fire({
	  position: 'top-end',
	  title: alertTitle,
	  text: "Esta acción no se puede revertir",
	  type: alertType,
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Si, Eliminar'
	}).then((result) => {
  		if (result.value) {
  			return 1;
    		/*MySwal.fire(
		      'Deleted!',
		      'Your file has been deleted.',
		      'success'
		    )*/
		}
		return 0;
});
 }

export {
  alertSimple,
  alertConfirmDelete,
};
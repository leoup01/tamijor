import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email, role) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    role,
  });

export const doRemove = (from , id) =>
	db.ref().child(from).child(id).remove();

export const onceGetUsers = () =>
  	db.ref('users').once('value');

export const onceGetUserRole = (id) =>
	db.ref('users/' + id + '/role').once('value');


// Other Entity APIs ...
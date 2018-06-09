import { auth, auth2 } from './firebase';

//Firebase's Authentication API


// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth2.createUserWithEmailAndPassword(email, password);


/* export const doCreateUserWithEmailAndPassword = (email, password, displayName) =>
  auth.createUserWithEmailAndPassword(email, password).then( (user) => {
  	user.updateProfile({
        displayName: displayName
    }).then(function() {
        // Update successful.
        console.log("Updated");
    }, function(error) {
        // An error happened.
    });     
  });*/

// Sign Up
export const doCreateUser = (email, password, displayName) =>{
  auth2.createUser({
  email: email,
  password: password,
})
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log(auth2.currentUser);
    console.log("Successfully created new user:", userRecord.uid);
    auth2.signOut();
  })
  .catch(function(error) {
    console.log("Error creating new user:", error);
  });
}

export const doGetCurrentUser = () => auth.currentUser;

export const doCredential = () => auth.EmailAuthProvider.credential("a@a.com", "123qwe");

export const doLinkCredentials = (a,b) =>{
  auth.currentUser.link(this.doCredential()).then(function(user) {
    console.log("Account linking success", user);
  }, function(error) {
    console.log("Account linking error", error);
  });
}

// Remove User
export const doRemoveUser = (uid) =>{
  auth.deleteUser(uid);
}

// Get User
export const doGetUser = (uid) =>{
  console.log(uid);
  var user = auth.uid;
  console.log(user);
}

// Delete my account

export const doDeleteMyAccount = () =>{
  var user = auth.currentUser;
  user.delete().then(function() {
    console.log("User deleted");
    // User deleted.
  }).catch(function(error) {
    console.log("User not deleted");
    // An error happened.
  });

}

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
  auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);
//Improved Firebase Authentication Error Handling

const auth = firebase.auth();

// Attempt authentication

auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User signed in successfully
    console.log('User signed in successfully');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error during authentication:', errorCode, errorMessage);

    // Handle specific error codes
    switch (errorCode) {
      case 'auth/invalid-email':
        // Handle invalid email
        console.error('Invalid email provided.');
        break;
      case 'auth/user-disabled':
        // Handle disabled user
        console.error('User account is disabled.');
        break;
      case 'auth/user-not-found':
        // Handle user not found
        console.error('User account not found.');
        break;
      case 'auth/wrong-password':
        // Handle wrong password
        console.error('Incorrect password provided.');
        break;
      case 'auth/network-request-failed':
        // Handle network errors with more context
        console.error('Network request failed. Check your internet connection or server status.');
        break;
      default:
        // Handle other unexpected errors
        console.error('An unexpected error occurred:', errorMessage);
    }
  });
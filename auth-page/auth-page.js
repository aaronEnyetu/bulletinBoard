// import functions and grab DOM elements
import { redirectIfLoggedIn, signupUser, signInUser } from '../fetch-utils.js';

const signUpForm = document.getElementById('sign-up');

const signInForm = document.getElementById('sign-in');


redirectIfLoggedIn();
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    console.log ({ email: data.get('email'), password: data.get('password') });
    const user = await signupUser(data.get('email'), data.get('password'));

    if (user) {
        location.replace('/create-page');
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    console.log ({email: data.get('email'), password: data.get('password') });
    const user = await signInUser(data.get('email'), data.get('password'));

    if (user) {
        console.log(user);
        location.replace('/create-page');
    }
});
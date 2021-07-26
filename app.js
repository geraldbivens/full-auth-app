'use strict';

const signUpForm = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in');
const baseURL = 'http://localhost:3000/';
const signUpURL = baseURL + 'users';
const signInURL = baseURL + 'signin';

signUpForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const username = formData.get('username');
  const password = formData.get('password');
  const body = JSON.stringify({
    username,
    password,
  });

  event.target.reset();

  fetch(signUpURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
});

signInForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const username = formData.get('username');
  const password = formData.get('password');
  const body = JSON.stringify({
    username,
    password,
  });

  event.target.reset();

  fetch(signInURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
});

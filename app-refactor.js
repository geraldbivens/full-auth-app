'use strict';

const signUpForm = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in');
const baseURL = 'http://localhost:3000/';
const signUpURL = baseURL + 'users';
const signInURL = baseURL + 'signin';

function createBody(form) {
  const formData = new FormData(form);
  const username = formData.get('username');
  const password = formData.get('password');
  const body = JSON.stringify({
    username,
    password,
  });

  return body;
}

function postRequest(url, body) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
}

signUpForm.addEventListener('submit', event => {
  event.preventDefault();

  const body = createBody(event.target);

  event.target.reset();

  postRequest(signUpURL, body);
});

signInForm.addEventListener('submit', event => {
  event.preventDefault();

  const body = createBody(event.target);

  event.target.reset();

  postRequest(signInURL, body)
    .then(response => response.json())
    .then(result => {
      if (result.token) {
        localStorage.setItem('token', result.token);
        const h3 = document.createElement('h3');
        h3.textContent = `Welcome ${result.user.username}!`;
        document.body.appendChild(h3);
      }
    });
});

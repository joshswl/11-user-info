import 'whatwg-fetch';

import data from './user-data';

const userPhoto = document.querySelector('.avatar__pic');
userPhoto.src = data.results[0].picture.large;

const userName = document.querySelector('.space__name');
userName.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;

const userEmail = document.querySelector('.space__email');
userEmail.innerText = data.results[0].email;

const userPhone = document.querySelector('.space__phone');
userPhone.innerText = data.results[0].phone;

const userLocation = document.querySelector('.space__location');
userLocation.innerText = `${data.results[0].location.city}, ${data.results[0].location.state}`;
